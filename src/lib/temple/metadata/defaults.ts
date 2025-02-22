import { browser } from 'webextension-polyfill-ts';

import { AssetMetadata } from './types';

export const TEZOS_METADATA: AssetMetadata = {
  decimals: 6,
  symbol: 'TEZ',
  name: 'Tezos',
  thumbnailUri: browser.runtime.getURL('misc/token-logos/tez.svg')
};

export const EMPTY_ASSET_METADATA: AssetMetadata = {
  decimals: 0,
  symbol: '',
  name: '',
  thumbnailUri: ''
};
