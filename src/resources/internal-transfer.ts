// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class InternalTransfer extends APIResource {
  /**
   * Performs a transfer of funds between two Projects.
   */
  initiate(
    params: InternalTransferInitiateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/internal-transfer', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface InternalTransferInitiateParams {
  /**
   * Body param: The amount to be transferred -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The Wallet ID of the recipient Project
   */
  receiverWalletId?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace InternalTransfer {
  export { type InternalTransferInitiateParams as InternalTransferInitiateParams };
}
