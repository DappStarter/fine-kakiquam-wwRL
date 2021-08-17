require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food render remember place concert gesture hat army giggle'; 
let testAccounts = [
"0xb4eabfc70422e7bd0e43ac2005e9ecdea0ff435477ba6aa0379df68967177293",
"0x229d975e319248a3ac95ae051235b6943ce4e52cc2933dbe604755b94613d0bf",
"0xb4dc5a49d8e3f29d0a0d542de7cbc07c9c69778bbf617c939650e82e93ebf0bb",
"0x370e6309233baf628f8518d088914a24795d730ddd736ddb8ae342da803f32fe",
"0x41840ea9996660853a0b032c29eb70ba7b7f60516de178f4cd073602657a4940",
"0x85144e6a5b58dba5c3b0a135519bd2783a246467b38fc3093ddb727d25af99f2",
"0x67b066e55a57d9b3c987246cd29b2291448d9ff98e35558dbec817c830c8beb5",
"0xb1555b8d13f2bb2efa7f8ff31a030dea4f4a63622b6629a0609e38443fbc9746",
"0x790430e9d95a111903f366ad2a5b6cd8737273e836daa9a64682899fd7d069c4",
"0xf8d974297bef8af07a02c5814484286005511adfef29eb3cc4080c8da6a6714f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

