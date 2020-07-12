import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

const { signDeploy } = require('@tgrospic/rnode-grpc-js')
require('./rnode-grpc-gen/js/DeployServiceV1_pb')
require('./rnode-grpc-gen/js/ProposeServiceV1_pb')

const readonly = `https://observer-asia.services.mainnet.rchain.coop`
const validator = `https://node5.root-shard.mainnet.rchain.coop`

const checkBalance = async (revAddress) => {
  const req = {
    method: 'POST',
    body: `
            new return, rl(\`rho:registry:lookup\`), RevVaultCh, vaultCh in {
              rl!(\`rho:rchain:revVault\`, *RevVaultCh) |
              for (@(_, RevVault) <- RevVaultCh) {
                @RevVault!("findOrCreate", "${revAddress}", *vaultCh) |
                for (@maybeVault <- vaultCh) {
                  match maybeVault {
                    (true, vault) => @vault!("balance", *return)
                    (false, err)  => return!(err)
                  }
                }
              }
            }
          `
  }

  const  balance= await fetch(readonly+`/api/explore-deploy`, req).then(r => r.json()).then(x =>  x.expr[0].ExprInt.data)
  console.log(balance)

}

const bytesToHex = (bytes) => {
  const hex = []
  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }
  return hex.join('')
}

const  transfer = async (revAddress, toAddress, amount) => { 
  const privateKey = 'XXXX'
  const code =`
    new rl(\`rho:registry:lookup\`), RevVaultCh, vaultCh, toVaultCh, deployerId(\`rho:rchain:deployerId\`), revVaultKeyCh, resultCh in {
      rl!(\`rho:rchain:revVault\`, *RevVaultCh) |
      for (@(_, RevVault) <- RevVaultCh) {
        @RevVault!("findOrCreate", "${revAddress}", *vaultCh) |
        @RevVault!("findOrCreate", "${toAddress}", *toVaultCh) |
        @RevVault!("deployerAuthKey", *deployerId, *revVaultKeyCh) |
        for (@(true, vault) <- vaultCh; key <- revVaultKeyCh; @(true, toVault) <- toVaultCh) {
          @vault!("transfer", "${toAddress}", "${amount}", *key, *resultCh) |
          for (_ <- resultCh) { Nil }
        }
      }
    }
  `

  const lastBlock = await fetch(readonly + `/api/last-finalized-block`, { method:'get' })
      .then((str) => str.json()).then( x =>  x.blockInfo.blockNumber )

  const deployData = {
    term: code, phlolimit: 300000, phloprice: 1,
    validafterblocknumber: lastBlock
  }
  const deploy = await signDeploy(privateKey, deployData)
  const da = {
    data: {
      term: deploy.term,
      timestamp: deploy.timestamp,
      phloPrice: deploy.phloprice,
      phloLimit: deploy.phlolimit,
      validAfterBlockNumber: deploy.validafterblocknumber
    },
    sigAlgorithm: deploy.sigalgorithm,
    signature: bytesToHex(deploy.sig),
    deployer: bytesToHex(deploy.deployer)
  }
  const req = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(da)
  }
  const b = await fetch(validator+`/api/deploy`, req).then(r => r.json()).then(x =>  x)
  console.log(b)
}


function App() {

  const [state, setState] = useState({
    revAddress: "",
    toAddress: "",
    amount: 0
  })

  function handleInputChange(evt) {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value
    })
  }

  return (
    <div >
      <form>
        <input type="text" name="revAddress" value={state.revAddress} onChange={handleInputChange} />
        <br/><br/>
        <Button  variant="contained" color="primary" onClick={()=> checkBalance(state.revAddress)} >
          Check
        </Button>
        <br/><br/>
      </form>
      <form>
        <input type="text" name="toAddress" value={state.toAddress} onChange={handleInputChange} />
        <br/><br/>
        <input type="number" name="amount" value={state.amount} onChange={handleInputChange} />
        <br/><br/>
        <Button  variant="contained" color="primary" onClick={()=> transfer(state.revAddress, state.toAddress, state.amount)} >
          Transfer
        </Button>
      </form>
    </div>
  )
}

export default App
