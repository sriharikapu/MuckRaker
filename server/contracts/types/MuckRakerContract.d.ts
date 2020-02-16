/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MuckRakerContractInterface extends Interface {
  functions: {
    get_all_projects: TypedFunctionDescription<{ encode([]: []): string }>;

    set_project_report: TypedFunctionDescription<{
      encode([projectCID, projectReportCID]: [string, string]): string;
    }>;

    create_project: TypedFunctionDescription<{
      encode([ownerAddress, projectCID]: [string, string]): string;
    }>;

    fund_project: TypedFunctionDescription<{
      encode([funderAddress, projectCID]: [string, string]): string;
    }>;

    get_funders: TypedFunctionDescription<{
      encode([projectCID]: [string]): string;
    }>;

    get_funding: TypedFunctionDescription<{
      encode([funderAddress]: [string]): string;
    }>;

    get_owner: TypedFunctionDescription<{
      encode([projectCID]: [string]): string;
    }>;

    get_projects: TypedFunctionDescription<{
      encode([ownerAddress]: [string]): string;
    }>;
  };

  events: {};
}

export class MuckRakerContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MuckRakerContract;
  attach(addressOrName: string): MuckRakerContract;
  deployed(): Promise<MuckRakerContract>;

  on(event: EventFilter | string, listener: Listener): MuckRakerContract;
  once(event: EventFilter | string, listener: Listener): MuckRakerContract;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MuckRakerContract;
  removeAllListeners(eventName: EventFilter | string): MuckRakerContract;
  removeListener(eventName: any, listener: Listener): MuckRakerContract;

  interface: MuckRakerContractInterface;

  functions: {
    get_all_projects(): Promise<string[]>;

    set_project_report(
      projectCID: string,
      projectReportCID: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    create_project(
      ownerAddress: string,
      projectCID: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fund_project(
      funderAddress: string,
      projectCID: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    get_funders(projectCID: string): Promise<string[]>;

    get_funding(funderAddress: string): Promise<string[]>;

    get_owner(projectCID: string): Promise<string>;

    get_projects(ownerAddress: string): Promise<string[]>;
  };

  get_all_projects(): Promise<string[]>;

  set_project_report(
    projectCID: string,
    projectReportCID: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  create_project(
    ownerAddress: string,
    projectCID: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fund_project(
    funderAddress: string,
    projectCID: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  get_funders(projectCID: string): Promise<string[]>;

  get_funding(funderAddress: string): Promise<string[]>;

  get_owner(projectCID: string): Promise<string>;

  get_projects(ownerAddress: string): Promise<string[]>;

  filters: {};

  estimate: {
    get_all_projects(): Promise<BigNumber>;

    set_project_report(
      projectCID: string,
      projectReportCID: string
    ): Promise<BigNumber>;

    create_project(
      ownerAddress: string,
      projectCID: string
    ): Promise<BigNumber>;

    fund_project(funderAddress: string, projectCID: string): Promise<BigNumber>;

    get_funders(projectCID: string): Promise<BigNumber>;

    get_funding(funderAddress: string): Promise<BigNumber>;

    get_owner(projectCID: string): Promise<BigNumber>;

    get_projects(ownerAddress: string): Promise<BigNumber>;
  };
}
