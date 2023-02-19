# StreamPay Smart Contracts

*Contracts responsible for the settlement of the web3 payment*

## Testnets

### Network **Goerli**

```
Network name: goerli
Chain Id: 5
Network scan: https://goerli.etherscan.io/
````

> Payment Contract deployed at [0x](https://goerli.etherscan.io/address/)

> Owner: [0x](https://goerli.etherscan.io/address/0x)

### Network **Mumbai**

```
Network name: maticmum
Chain Id: 80001
Network scan: https://mumbai.polygonscan.com/
````

> Payment Contract deployed at [0x](https://mumbai.polygonscan.com/address/0x)

> Owner: [0x](https://mumbai.polygonscan.com/address/0x)

### Network **Binance - Smart Chain — Testnet**

```
Network name: bnbt
RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
Chain Id: 97
Currency Symbol: BNB
Network scan:  https://testnet.bscscan.com
````

> Payment Contract deployed at [0x](https://testnet.bscscan.com/address/0x)

> Owner: [0x](https://testnet.bscscan.com/address/0x)
_____

## Mainnets 

> TODO

## Commands

**Building**

```
yarn install
```

```
yarn hardhat compile
```

**Tests**

```
yarn hardhat test
```

**Coverage check**

```
npx hardhat coverage
```

# Script Usage Sample

Script: ``deploy_payment_contract_binance_smartChain_testnet.ts``

```
yarn ts-node --files .\scripts\deploy_payment_contract_binance_smartChain_testnet.ts
```
