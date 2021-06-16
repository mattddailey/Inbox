const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    "limit impulse member rebel labor congress destroy mobile pottery furnace admit remain",
    "https://rinkeby.infura.io/v3/d2ef991624184331a57e40f5c0c35894"
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from contract', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hello World!"] })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract Deployed to', result.options.address);
};
deploy();