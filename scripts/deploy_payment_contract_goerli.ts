import { ethers } from "ethers";
import { initWalletByProvider } from './utils/initWallet';
import * as paymentContract from "../artifacts/contracts/PaymentContract.sol/PaymentContract.json";

async function main() {
    const signer = await initWalletByProvider(process.env.TESTNET_GOERLI_RPC_URL);
    console.log("Deploying Stream Payment Contract");
    const pContractFactory = new ethers.ContractFactory(
        paymentContract.abi, 
        paymentContract.bytecode,
        signer
    );
    const pcontract = await pContractFactory.deploy();
    await pcontract.deployed();
    console.log("Completed");
    console.log(`Stream Payment Contract deployed at ${pcontract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
