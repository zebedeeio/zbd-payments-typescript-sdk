// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Wallet extends APIResource {
  /**
   * Retrieve all data about a ZBD Project's Wallet.
   */
  retrieve(params: WalletRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get('/v0/wallet', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface WalletRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Wallet {
  export { type WalletRetrieveParams as WalletRetrieveParams };
}
