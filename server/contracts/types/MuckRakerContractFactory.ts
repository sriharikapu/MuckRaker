/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { MuckRakerContract } from "./MuckRakerContract";

export class MuckRakerContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<MuckRakerContract> {
    return super.deploy() as Promise<MuckRakerContract>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): MuckRakerContract {
    return super.attach(address) as MuckRakerContract;
  }
  connect(signer: Signer): MuckRakerContractFactory {
    return super.connect(signer) as MuckRakerContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MuckRakerContract {
    return new Contract(address, _abi, signerOrProvider) as MuckRakerContract;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "get_all_projects",
    outputs: [
      {
        internalType: "string[]",
        name: "projects",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address"
      },
      {
        internalType: "string",
        name: "projectCID",
        type: "string"
      }
    ],
    name: "create_project",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "funderAddress",
        type: "address"
      },
      {
        internalType: "string",
        name: "projectCID",
        type: "string"
      }
    ],
    name: "fund_project",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "projectCID",
        type: "string"
      }
    ],
    name: "get_funders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "funderAddress",
        type: "address"
      }
    ],
    name: "get_funding",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "projectCID",
        type: "string"
      }
    ],
    name: "get_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address"
      }
    ],
    name: "get_projects",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function",
    constant: true
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051600a808252610160820190925290816020015b606081526020019060019003908162000029575050805162000054916005916020909101906200005b565b50620001d3565b828054828255906000526020600020908101928215620000ad579160200282015b82811115620000ad57825180516200009c918491602090910190620000bf565b50916020019190600101906200007c565b50620000bb92915062000140565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200010257805160ff191683800117855562000132565b8280016001018555821562000132579182015b828111156200013257825182559160200191906001019062000115565b50620000bb9291506200016b565b6200016891905b80821115620000bb5760006200015e828262000188565b5060010162000147565b90565b6200016891905b80821115620000bb576000815560010162000172565b50805460018160011615610100020316600290046000825580601f10620001b05750620001d0565b601f016020900490600052602060002090810190620001d091906200016b565b50565b610ac080620001e36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635e2bf5301161005b5780635e2bf530146100eb57806362cb90a91461010b578063822a67511461012b578063e97410af1461013e5761007d565b806311dbc7d6146100825780634ff896dc146100ab5780635857ee0d146100cb575b600080fd5b61009561009036600461082a565b610146565b6040516100a29190610a51565b60405180910390f35b6100be6100b9366004610883565b6102f6565b6040516100a29190610906565b6100de6100d93660046107fc565b610328565b6040516100a29190610966565b6100fe6100f936600461082a565b610414565b6040516100a291906109c6565b61011e610119366004610883565b6104b0565b6040516100a2919061091a565b6100de6101393660046107fc565b61052a565b6100de61060d565b600060048260405161015891906108ea565b9081526040519081900360200190205460ff16156101915760405162461bcd60e51b815260040161018890610a10565b60405180910390fd5b6040516020016101a0906106e3565b60405160208183030381529060405280519060200120826040516020016101c791906108ea565b6040516020818303038152906040528051906020012014156101fb5760405162461bcd60e51b8152600401610188906109d9565b600160048360405161020d91906108ea565b9081526040805160209281900383019020805460ff1916931515939093179092556001600160a01b03851660009081528082529182208054600181018255818452928290208551919361026693910191908601906106e6565b508360018460405161027891906108ea565b9081526040516020918190038201902080546001600160a01b0319166001600160a01b039390931692909217909155600580546001810182556000829052855191926102ec927f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db090920191908701906106e6565b5050549392505050565b600060018260405161030891906108ea565b908152604051908190036020019020546001600160a01b03169050919050565b6001600160a01b038116600090815260208181526040808320805482518185028101850190935280835260609492939192909184015b828210156104095760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b50505050508152602001906001019061035e565b505050509050919050565b6001600160a01b03821660009081526002602090815260408220805460018101825581845292829020845160609492936104559392909201918601906106e6565b50600060038460405161046891906108ea565b90815260405160209181900382019020805460018101825560009182529190200180546001600160a01b0319166001600160a01b039690961695909517909455509092915050565b60606003826040516104c291906108ea565b908152604080519182900360209081018320805480830285018301909352828452919083018282801561051e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610500575b50505050509050919050565b6001600160a01b0381166000908152600260209081526040808320805482518185028101850190935280835260609492939192909184015b828210156104095760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b505050505081526020019060010190610562565b60606005805480602002602001604051908101604052809291908181526020016000905b828210156106dc5760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b505050505081526020019060010190610631565b5050505090505b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072757805160ff1916838001178555610754565b82800160010185558215610754579182015b82811115610754578251825591602001919060010190610739565b50610760929150610764565b5090565b6106e391905b80821115610760576000815560010161076a565b600082601f83011261078e578081fd5b813567ffffffffffffffff808211156107a5578283fd5b604051601f8301601f1916810160200182811182821017156107c5578485fd5b6040528281529250828483016020018610156107e057600080fd5b8260208601602083013760006020848301015250505092915050565b60006020828403121561080d578081fd5b81356001600160a01b0381168114610823578182fd5b9392505050565b6000806040838503121561083c578081fd5b82356001600160a01b0381168114610852578182fd5b9150602083013567ffffffffffffffff81111561086d578182fd5b6108798582860161077e565b9150509250929050565b600060208284031215610894578081fd5b813567ffffffffffffffff8111156108aa578182fd5b6108b68482850161077e565b949350505050565b600081518084526108d6816020860160208601610a5a565b601f01601f19169290920160200192915050565b600082516108fc818460208701610a5a565b9190910192915050565b6001600160a01b0391909116815260200190565b602080825282518282018190526000918401906040840190835b8181101561095b5783516001600160a01b0316835260209384019390920191600101610934565b509095945050505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b828110156109b957603f198886030184526109a78583516108be565b9450928501929085019060010161098b565b5092979650505050505050565b60006020825261082360208301846108be565b6020808252601a908201527f50726f6a6563744349442063616e277420626520656d7074792e000000000000604082015260600190565b60208082526021908201527f50726f6a656374204349442068617320616c7265616479206265656e207573656040820152601960fa1b606082015260800190565b90815260200190565b60005b83811015610a75578181015183820152602001610a5d565b83811115610a84576000848401525b5050505056fea2646970667358221220bb756addc01c53df8085e78795996d44328bb0a1f4623e0e8907ba66865aee6f64736f6c63430006010033";