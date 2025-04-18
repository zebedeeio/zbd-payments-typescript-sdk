// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vouchers extends APIResource {
  /**
   * Get Voucher
   */
  retrieve(
    id: string,
    params: VoucherRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/vouchers/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface VoucherRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Vouchers {
  export { type VoucherRetrieveParams as VoucherRetrieveParams };
}
