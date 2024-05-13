import { ActorSubclass } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { IDL } from '@dfinity/candid';

export type TokenStandard = 'ICP' | 'IS20' | 'BTC' | 'ICRC1' | 'EXT';
export interface Asset {
  id?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
  fee?: bigint;
  standard: TokenStandard;
  balance?: bigint;
}

export interface RequestConnectParams {
  timeout?: number;
  whitelist?: string[];
}

export interface CreateActor {
  host?: string;
  canisterId: string;
  interfaceFactory: IDL.InterfaceFactory;
}

export interface Transaction {
  idl: IDL.InterfaceFactory;
  canisterId: string;
  methodName: string;
  args: any[];
  skip?: boolean | (() => boolean);
  onSuccess: (res: unknown) => Promise<unknown>;
  onFail: (res: unknown) => Promise<unknown>;
}

export interface BatchOptions {
  host?: string;
}

export interface BitfinityWallet {
  createActor<T>(args: CreateActor): Promise<ActorSubclass<T>>;
  isConnected(): Promise<boolean>;
  disconnect(): Promise<boolean>;
  requestConnect(params: RequestConnectParams): Promise<any>;
  batchTransactions(
    transactions: Transaction[],
    options?: BatchOptions
  ): Promise<boolean>;
  createActor<T>({
    canisterId,
    interfaceFactory
  }: CreateActor): Promise<ActorSubclass<T>>;
  getPrincipal: () => Promise<Principal>;
  getUserAssets: () => Promise<Asset[]>;
}

declare global {
  interface Window {
    ic: { bitfinityWallet: BitfinityWallet };
  }
}
