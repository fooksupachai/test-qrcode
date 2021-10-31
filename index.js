var express = require("express");
var Web3 = require("web3");
var app = express();

const deposit = async () => {
    
    web3MetaMask = new Web3(window.ethereum);

    const accounts = await web3MetaMask.eth.getAccounts();

    let userAddress = accounts[0];

    const gasPriceWei = await web3MetaMask.eth.getGasPrice();

    const deposit = contractAuction.methods.deposit(1, 1).encodeABI();
    const depositOption = {
        from: userAddress,
        to: "0x182d5d53553e5F387c5BC066f6F0b71DDC056B83",
        gas: 200000,
        gasPrice: gasPriceWei,
        value: '0x0',
        data: deposit,
    };

    try {
        await web3MetaMask.eth.sendTransaction(depositOption);
    } catch (err) {

    }
}

app.get("/deposit", (req, res, next) => {
    console.log("do")
    res.status(400).json({})
});
   
app.listen(3000, () => {
 console.log("Server running on port 3000");
});