require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food town rescue pitch uncover coral light army general'; 
let testAccounts = [
"0xd479099a9f1f5ef7b59ab2c1e936ed8fb620f04528a3af123a9e3a568fbdd209",
"0xfbcb667c2c244b5c90892695ab2e78c5e2208ad4bb561b01152d9809f99e06b2",
"0xae820465d7e5d6b5d4b81e2cb8ba4d3d469e127a01caac9a08a20fd9dad7c6c0",
"0xee7797333161ddb8a246f4b32b99ebefa5697d664140f61e63fc23e9083f7cb3",
"0x3bee53c7780500c1d071442bd14a2a417c6dc29cb91330b75a8b9f60e6ca7a62",
"0x520fb2edb85d7296fecb01f81c622883e042cb4e47a41c934ab34c1f26e91e16",
"0x9740db453f7cc4741af17609f9ca1a9ae3b68762322d8e1ecb7a111bfe8e9c40",
"0x60c4b5422afc331744ddb0eddce53ee82696edbfec359770967baff0ebc5068d",
"0x7ed95e1880778cc2a2570b4de57770db4384e62b5ed3a059dcf0d8aa79cd811f",
"0x890f1227c706b85d9afae491d41d742b3b16d24b5ca33eb394eccd5e992b637b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


