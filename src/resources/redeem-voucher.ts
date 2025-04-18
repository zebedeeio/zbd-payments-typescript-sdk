// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class RedeemVoucher extends APIResource {
  /**
   * Redeem Voucher
   */
  redeem(
    params: RedeemVoucherRedeemParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/redeem-voucher', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface RedeemVoucherRedeemParams {
  /**
   * Body param: Valid 8-digit ZBD Voucher Code
   */
  code?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace RedeemVoucher {
  export { type RedeemVoucherRedeemParams as RedeemVoucherRedeemParams };
}
