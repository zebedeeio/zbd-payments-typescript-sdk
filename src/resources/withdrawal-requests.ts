// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WithdrawalRequests extends APIResource {
  /**
   * Start creating Bitcoin voucher QR codes.
   */
  create(
    params: WithdrawalRequestCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/withdrawal-requests', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve all data about a single Withdrawal Request.
   */
  retrieve(
    id: string,
    params: WithdrawalRequestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/withdrawal-requests/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface WithdrawalRequestCreateParams {
  /**
   * Body param: The amount for the Withdrawal Request -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Withdrawal Request
   */
  description?: string;

  /**
   * Body param: Time until Withdrawal Request expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface WithdrawalRequestRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace WithdrawalRequests {
  export {
    type WithdrawalRequestCreateParams as WithdrawalRequestCreateParams,
    type WithdrawalRequestRetrieveParams as WithdrawalRequestRetrieveParams,
  };
}
