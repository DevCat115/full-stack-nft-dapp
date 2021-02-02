import { ChainId } from '@usedapp/core';

export type AddressMap = { [chainId: number]: string };

export const NFT_ADDRESSES: AddressMap = {
	[ChainId.Rinkeby]: '0x4A3C736EA193e7C83b9A59577952aAB300d17852',
};
