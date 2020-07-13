RChain已经提供了两个API供开发者使用：
1. Tomislav开发的Javascript版
https://github.com/rchain/exchange-api-njs/

2. Will开发的Python版
https://github.com/rchain/pyrchain

但是这两个API只适合于在Server端使用，如果希望从浏览器端发起与RChain节点的交互，可以参考我这个教程。


# 安装API
首先安装官方Javascript版API:

```bash
npm install --save-dev grpc-tools protobufjs
npm install rchain/exchange-api-njs
```
由于墙的原因，走到最后会失败，设置穿墙也于事无补。
问题在于安装步骤最后会运行：
```bash
rnode-grpc --gen-dir lib/rnode-grpc-gen --rnode-version v0.9.24
```
正常情况下应该会生成包含一堆机器生成代码的rnode-grpc-gen 文件夹。解决办法是大家可以从我的代码库中找到这个文件夹，把他copy到自己的项目中即可。注意：上面的命令还是需要运行的，直至它报错退出为止。

想要对整个过程有更详细了解的话，请见Tomislav的代码：
https://github.com/tgrospic/rnode-grpc-js

# 简要介绍
1. 本教程实现了两个功能：查询余额和转账
2. 我们会和两个节点进行交互，一个只读节点，一个验证节点。只读节点用于读取链上数据；验证节点用于出块，帮助我们完成转账等功能。
3. 在链上部署代码时，需指定一个区块区间，过了这个区间，部署自动失效。所以我们先查询一下lastBlock，把lastBlock赋值给validafterblocknumber。系统会在这个区块及随后的50个区块构成的区间进行部署。
3. phlolimit和phloprice对应于以太坊的gaslimit和gasprice。
4. phlolimit 我们用300K，这个值也可以选用小一些的值。节点会将没用完的部分返还。
