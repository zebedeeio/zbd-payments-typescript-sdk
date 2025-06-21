// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export interface InternalTransferInitiateResponse {
  id: string;
  amount: string;
  unit: string;
  status: string;
  processedAt: string;
  fee: string;
  senderWalletId: string;
  receiverWalletId: string;
  internalId?: string;
}

export class InternalTransfer extends APIResource {
  /**
   * Performs a transfer of funds between two Projects.
   *
   * @example
   * ```ts
   * await client.internalTransfer.initiate({
   *   amount: 'string',
   *   receiverWalletId: 'string',
   * });
   * ```
   */
  initiate(
    body: InternalTransferInitiateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InternalTransferInitiateResponse> {
    return this._client.post('/v0/internal-transfer', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InternalTransferInitiateParams {
  /**
   * The amount to be transferred -> in millisatoshis
   */
  amount?: string;

  /**
   * The Wallet ID of the recipient Project
   */
  receiverWalletId?: string;
}

export declare namespace InternalTransfer {
  export {
    type InternalTransferInitiateResponse as InternalTransferInitiateResponse,
    type InternalTransferInitiateParams as InternalTransferInitiateParams,
  };
}
