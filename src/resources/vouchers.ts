// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vouchers extends APIResource {
  /**
   * Create Voucher
   */
  create(params: VoucherCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
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

  /**
   * Redeem Voucher
   */
  redeem(params: VoucherRedeemParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
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

  /**
   * Revoke Voucher
   */
  revoke(params: VoucherRevokeParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
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

export interface VoucherCreateParams {
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

export interface VoucherRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface VoucherRedeemParams {
  /**
   * Body param: Valid 8-digit ZBD Voucher Code
   */
  code?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface VoucherRevokeParams {
  /**
   * Body param: Valid 8-digit ZBD Voucher Code
   */
  code?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Vouchers {
  export {
    type VoucherCreateParams as VoucherCreateParams,
    type VoucherRetrieveParams as VoucherRetrieveParams,
    type VoucherRedeemParams as VoucherRedeemParams,
    type VoucherRevokeParams as VoucherRevokeParams,
  };
}
