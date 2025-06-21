// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export interface WithdrawalRequestCreateResponse {
  id: string;
  unit: string;
  amount: string;
  createdAt: string;
  expiresAt: string;
  description: string;
  status: string;
  invoice: {
    request: string;
    uri: string;
  };
  onchain: string;
  internalId?: string;
  callbackUrl?: string;
}

export interface WithdrawalRequestRetrieveResponse {
  id: string;
  unit: string;
  amount: string;
  createdAt: string;
  expiresAt: string;
  description: string;
  status: string;
  processedAt?: string;
  confirmedAt?: string;
  invoice: {
    request: string;
    uri: string;
  };
  onchain: string;
  internalId?: string;
  callbackUrl?: string;
  fee?: string;
  preimage?: string;
}

export class WithdrawalRequests extends APIResource {
  /**
   * Start creating Bitcoin voucher QR codes.
   *
   * @example
   * ```ts
   * await client.withdrawalRequests.create({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   description: 'string',
   *   expiresIn: NaN,
   *   internalId: 'string',
   * });
   * ```
   */
  create(
    body: WithdrawalRequestCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WithdrawalRequestCreateResponse> {
    return this._client.post('/v0/withdrawal-requests', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all data about a single Withdrawal Request.
   *
   * @example
   * ```ts
   * await client.withdrawalRequests.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WithdrawalRequestRetrieveResponse> {
    return this._client.get(path`/v0/withdrawal-requests/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WithdrawalRequestCreateParams {
  /**
   * The amount for the Withdrawal Request -> in millisatoshis
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Withdrawal Request
   */
  description?: string;

  /**
   * Time until Withdrawal Request expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Open metadata string property
   */
  internalId?: string;
}

export declare namespace WithdrawalRequests {
  export {
    type WithdrawalRequestCreateResponse as WithdrawalRequestCreateResponse,
    type WithdrawalRequestRetrieveResponse as WithdrawalRequestRetrieveResponse,
    type WithdrawalRequestCreateParams as WithdrawalRequestCreateParams,
  };
}
