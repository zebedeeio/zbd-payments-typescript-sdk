// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class CreateVoucher extends APIResource {
  /**
   * Create Voucher
   */
  create(
    params: CreateVoucherCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v1/create-voucher', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CreateVoucherCreateParams {
  /**
   * Body param: The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: Note or comment for this Charge (visible to payer)
   */
  description?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace CreateVoucher {
  export { type CreateVoucherCreateParams as CreateVoucherCreateParams };
}
