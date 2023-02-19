/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PaymentContract,
  PaymentContractInterface,
} from "../../contracts/PaymentContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "serviceFee",
        type: "uint256",
      },
    ],
    name: "Paid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ERC20tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountToPay",
        type: "uint256",
      },
    ],
    name: "payUsingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ERC20tokenAddress",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200008a6000801b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166200009060201b60201c565b620001f3565b620000a282826200018160201b60201c565b6200017d57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000122620001eb60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b611b6280620002036000396000f3fe6080604052600436106100a65760003560e01c8063258898b311610064578063258898b3146101be5780632f2ff15d146101e757806336568abe1461021057806391d1485414610239578063a217fddf14610276578063d547741f146102a1576100a6565b8062f714ce146100ab57806301ffc9a7146100d45780630c11dedd1461011157806312065fe01461012d5780631d1d9e9b14610158578063248a9ca314610181575b600080fd5b3480156100b757600080fd5b506100d260048036038101906100cd9190611030565b6102ca565b005b3480156100e057600080fd5b506100fb60048036038101906100f691906110c8565b6103d5565b6040516101089190611110565b60405180910390f35b61012b60048036038101906101269190611169565b61044f565b005b34801561013957600080fd5b5061014261058f565b60405161014f91906111a5565b60405180910390f35b34801561016457600080fd5b5061017f600480360381019061017a91906111c0565b610597565b005b34801561018d57600080fd5b506101a860048036038101906101a39190611249565b6107ca565b6040516101b59190611285565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e091906112a0565b6107e9565b005b3480156101f357600080fd5b5061020e600480360381019061020991906112f3565b610941565b005b34801561021c57600080fd5b50610237600480360381019061023291906112f3565b610962565b005b34801561024557600080fd5b50610260600480360381019061025b91906112f3565b6109e5565b60405161026d9190611110565b60405180910390f35b34801561028257600080fd5b5061028b610a4f565b6040516102989190611285565b60405180910390f35b3480156102ad57600080fd5b506102c860048036038101906102c391906112f3565b610a56565b005b6000801b6102d781610a77565b6102e46000801b836109e5565b610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031a906113b6565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168460405161034990611407565b60006040518083038185875af1925050503d8060008114610386576040519150601f19603f3d011682016040523d82523d6000602084013e61038b565b606091505b50509050806103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c690611468565b60405180910390fd5b50505050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610448575061044782610a8b565b5b9050919050565b600034905080612710808361046491906114e6565b61046e9190611517565b146104ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a5906115bd565b60405180910390fd5b6000612710608c836104c09190611517565b6104ca91906114e6565b9050600081836104da91906115dd565b905060008473ffffffffffffffffffffffffffffffffffffffff168260405161050290611407565b60006040518083038185875af1925050503d806000811461053f576040519150601f19603f3d011682016040523d82523d6000602084013e610544565b606091505b5050905080610588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057f90611468565b60405180910390fd5b5050505050565b600047905090565b8061271080836105a791906114e6565b6105b19190611517565b146105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e8906115bd565b60405180910390fd5b60008290506000612710608c846106089190611517565b61061291906114e6565b90506000818461062291906115dd565b90508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3388846040518463ffffffff1660e01b81526004016106619392919061167f565b602060405180830381600087803b15801561067b57600080fd5b505af115801561068f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b391906116e2565b508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016106f19392919061170f565b602060405180830381600087803b15801561070b57600080fd5b505af115801561071f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074391906116e2565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ff7eab8323d0e68bab8794461553abcd3dccd29286ed57d295fb0d04e83db77bd84866040516107ba929190611746565b60405180910390a4505050505050565b6000806000838152602001908152602001600020600101549050919050565b6000801b6107f681610a77565b6108036000801b846109e5565b610842576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610839906113b6565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85876040518363ffffffff1660e01b815260040161088292919061176f565b602060405180830381600087803b15801561089c57600080fd5b505af11580156108b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d491906116e2565b508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb8760405161093291906111a5565b60405180910390a35050505050565b61094a826107ca565b61095381610a77565b61095d8383610af5565b505050565b61096a610bd5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce9061180a565b60405180910390fd5b6109e18282610bdd565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b610a5f826107ca565b610a6881610a77565b610a728383610bdd565b505050565b610a8881610a83610bd5565b610cbe565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610aff82826109e5565b610bd157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b76610bd5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b610be782826109e5565b15610cba57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610c5f610bd5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610cc882826109e5565b610d5757610ced8173ffffffffffffffffffffffffffffffffffffffff166014610d5b565b610cfb8360001c6020610d5b565b604051602001610d0c92919061193c565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e91906119c0565b60405180910390fd5b5050565b606060006002836002610d6e9190611517565b610d7891906119e2565b67ffffffffffffffff811115610d9157610d90611a38565b5b6040519080825280601f01601f191660200182016040528015610dc35781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610dfb57610dfa611a67565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610e5f57610e5e611a67565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610e9f9190611517565b610ea991906119e2565b90505b6001811115610f49577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610eeb57610eea611a67565b5b1a60f81b828281518110610f0257610f01611a67565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610f4290611a96565b9050610eac565b5060008414610f8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8490611b0c565b60405180910390fd5b8091505092915050565b600080fd5b6000819050919050565b610faf81610f9c565b8114610fba57600080fd5b50565b600081359050610fcc81610fa6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ffd82610fd2565b9050919050565b61100d81610ff2565b811461101857600080fd5b50565b60008135905061102a81611004565b92915050565b6000806040838503121561104757611046610f97565b5b600061105585828601610fbd565b92505060206110668582860161101b565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6110a581611070565b81146110b057600080fd5b50565b6000813590506110c28161109c565b92915050565b6000602082840312156110de576110dd610f97565b5b60006110ec848285016110b3565b91505092915050565b60008115159050919050565b61110a816110f5565b82525050565b60006020820190506111256000830184611101565b92915050565b600061113682610fd2565b9050919050565b6111468161112b565b811461115157600080fd5b50565b6000813590506111638161113d565b92915050565b60006020828403121561117f5761117e610f97565b5b600061118d84828501611154565b91505092915050565b61119f81610f9c565b82525050565b60006020820190506111ba6000830184611196565b92915050565b6000806000606084860312156111d9576111d8610f97565b5b60006111e786828701611154565b93505060206111f88682870161101b565b925050604061120986828701610fbd565b9150509250925092565b6000819050919050565b61122681611213565b811461123157600080fd5b50565b6000813590506112438161121d565b92915050565b60006020828403121561125f5761125e610f97565b5b600061126d84828501611234565b91505092915050565b61127f81611213565b82525050565b600060208201905061129a6000830184611276565b92915050565b6000806000606084860312156112b9576112b8610f97565b5b60006112c786828701610fbd565b93505060206112d88682870161101b565b92505060406112e98682870161101b565b9150509250925092565b6000806040838503121561130a57611309610f97565b5b600061131885828601611234565b92505060206113298582860161101b565b9150509250929050565b600082825260208201905092915050565b7f4f6e6c79206f776e6572206164647265737320697320616c6c6f77656420746f60008201527f2072656365697665207468652066656573000000000000000000000000000000602082015250565b60006113a0603183611333565b91506113ab82611344565b604082019050919050565b600060208201905081810360008301526113cf81611393565b9050919050565b600081905092915050565b50565b60006113f16000836113d6565b91506113fc826113e1565b600082019050919050565b6000611412826113e4565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000611452601483611333565b915061145d8261141c565b602082019050919050565b6000602082019050818103600083015261148181611445565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114f182610f9c565b91506114fc83610f9c565b92508261150c5761150b611488565b5b828204905092915050565b600061152282610f9c565b915061152d83610f9c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611566576115656114b7565b5b828202905092915050565b7f746f6f20736d616c6c20616d6f756e7400000000000000000000000000000000600082015250565b60006115a7601083611333565b91506115b282611571565b602082019050919050565b600060208201905081810360008301526115d68161159a565b9050919050565b60006115e882610f9c565b91506115f383610f9c565b925082821015611606576116056114b7565b5b828203905092915050565b61161a81610ff2565b82525050565b6000819050919050565b600061164561164061163b84610fd2565b611620565b610fd2565b9050919050565b60006116578261162a565b9050919050565b60006116698261164c565b9050919050565b6116798161165e565b82525050565b60006060820190506116946000830186611611565b6116a16020830185611670565b6116ae6040830184611196565b949350505050565b6116bf816110f5565b81146116ca57600080fd5b50565b6000815190506116dc816116b6565b92915050565b6000602082840312156116f8576116f7610f97565b5b6000611706848285016116cd565b91505092915050565b60006060820190506117246000830186611611565b6117316020830185611611565b61173e6040830184611196565b949350505050565b600060408201905061175b6000830185611196565b6117686020830184611196565b9392505050565b60006040820190506117846000830185611611565b6117916020830184611196565b9392505050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b60006117f4602f83611333565b91506117ff82611798565b604082019050919050565b60006020820190508181036000830152611823816117e7565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061186b60178361182a565b915061187682611835565b601782019050919050565b600081519050919050565b60005b838110156118aa57808201518184015260208101905061188f565b838111156118b9576000848401525b50505050565b60006118ca82611881565b6118d4818561182a565b93506118e481856020860161188c565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b600061192660118361182a565b9150611931826118f0565b601182019050919050565b60006119478261185e565b915061195382856118bf565b915061195e82611919565b915061196a82846118bf565b91508190509392505050565b6000601f19601f8301169050919050565b600061199282611881565b61199c8185611333565b93506119ac81856020860161188c565b6119b581611976565b840191505092915050565b600060208201905081810360008301526119da8184611987565b905092915050565b60006119ed82610f9c565b91506119f883610f9c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a2d57611a2c6114b7565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611aa182610f9c565b91506000821415611ab557611ab46114b7565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000611af6602083611333565b9150611b0182611ac0565b602082019050919050565b60006020820190508181036000830152611b2581611ae9565b905091905056fea2646970667358221220467f3cb4e8d861f23e8b7e70795a3e615256220a8aed4c323befc1c5b3c32a7e64736f6c63430008090033";

type PaymentContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentContract__factory extends ContractFactory {
  constructor(...args: PaymentContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentContract> {
    return super.deploy(overrides || {}) as Promise<PaymentContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PaymentContract {
    return super.attach(address) as PaymentContract;
  }
  override connect(signer: Signer): PaymentContract__factory {
    return super.connect(signer) as PaymentContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentContractInterface {
    return new utils.Interface(_abi) as PaymentContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentContract {
    return new Contract(address, _abi, signerOrProvider) as PaymentContract;
  }
}