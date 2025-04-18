// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class RevokeVoucher extends APIResource {
  /**
   * Revoke Voucher
   */
  revoke(
    params: RevokeVoucherRevokeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/revoke-voucher', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface RevokeVoucherRevokeParams {
  /**
   * Body param: Valid 8-digit ZBD Voucher Code
   */
  code?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace RevokeVoucher {
  export { type RevokeVoucherRevokeParams as RevokeVoucherRevokeParams };
}
