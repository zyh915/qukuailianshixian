const messageType = require("./messages-type.js");
const Messages = require("./messages.js");
const Block = require("./Block.js");
console.log("==========消息类型和消息工厂测试开始==========");
try {
    console.log("1. 测试消息类型枚举：");
    console.log("REQUEST_LATEST_BLOCK:", messageType.REQUEST_LATEST_BLOCK);
    console.log(
        "REQUEST_LATEST_BLOCKCHAIN:",
        messageType.REQUEST_LATEST_BLOCKCHAIN,
    );
    console.log("RECEIVE_LATEST_BLOCK:", messageType.RECEIVE_LATEST_BLOCK);
    console.log(
        "RECEIVE_LATEST_BLOCKCHAIN:",
        messageType.RECEIVE_LATEST_BLOCKCHAIN,
    );
    console.log("HANDSHAKE:", messageType.HANDSHAKE);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("2. 测试请求最新区块的消息功能：");
    const requestLatestBlockMsg = Messages.getLatestBlock();
    console.log("请求最新区块的消息:", requestLatestBlockMsg.type);
    console.log(
        "是否为请求最新区块类型：",
        requestLatestBlockMsg.type === messageType.REQUEST_LATEST_BLOCK,
    );
    console.log("消息结构：", JSON.stringify(requestLatestBlockMsg));
    console.log("--------------------------------------------------");
    console.log("3. 测试响应最新区块消息的功能：");
    const testBlock = Block.genesis;
    const sendLatestBlockMsg = Messages.sendLatestBlock(testBlock);
    console.log("消息类型：", sendLatestBlockMsg.type);
    console.log("是否为响应最新区块类型：", sendLatestBlockMsg.type === messageType.RECEIVE_LATEST_BLOCK);
    console.log("包含的区块数据：", sendLatestBlockMsg.data);
    console.log("数据是否为创世区块：", sendLatestBlockMsg.data.index === 0);
    console.log("消息结构：", JSON.stringify(sendLatestBlockMsg));
    console.log("***************************************************");
    console.log("4. 测试请求整条区块链消息的功能：");
    const requestBlockchainMsg = Messages.getBlockchain();
    console.log("消息类型：", requestBlockchainMsg.type);
    console.log("是否为请求整条区块链类型：", requestBlockchainMsg.type === messageType.REQUEST_LATEST_BLOCKCHAIN);
    console.log("消息结构：", JSON.stringify(requestBlockchainMsg));
    console.log("--------------------------------------------------");
    console.log("5. 测试响应整条区块链消息的功能：");
    const testChain = [Block.genesis];
    const sendBlockchainMsg = Messages.sendBlockchain(testChain);
    console.log("消息类型：", sendBlockchainMsg.type);
    console.log("是否为响应整条区块链类型：", sendBlockchainMsg.type === messageType.RECEIVE_LATEST_BLOCKCHAIN);
    console.log("包含的区块链数据：", sendBlockchainMsg.data);
    console.log("数据是否为创世区块：", sendBlockchainMsg.data[0].index === 0);
    console.log("--------------------------------------------------");
    console.log("6. 测试发送握手消息功能：");
    const handshakeMsg = Messages.sendHandshake(2727);
    console.log("消息类型：", handshakeMsg.type);
    console.log("是否为握手消息类型：", handshakeMsg.type === messageType.HANDSHAKE);
    console.log("包含的端口数据：", handshakeMsg.data.port);
    console.log("端口是否正确：", handshakeMsg.data.port === 2727);
    console.log("--------------++++++++++++++++++++++++++66666666666666--------------------");
} catch (err) {
    console.error("消息类型和消息工厂测试失败：", err);
}