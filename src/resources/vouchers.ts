// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export interface VoucherCreateResponse {
  id: string;
  code: string;
  amount: string;
  description?: string;
}

export interface VoucherRetrieveResponse {
  id: string;
  code: string;
  amount: string;
  description?: string;
  status: string;
  createdAt: string;
}

export interface VoucherRedeemResponse {
  success: boolean;
  message: string;
  amount?: string;
}

export interface VoucherRevokeResponse {
  success: boolean;
  message: string;
}

export class Vouchers extends APIResource {
  /**
   * Create Voucher
   *
   * @example
   * ```ts
   * await client.vouchers.create({
   *   amount: 'string',
   *   description: 'string',
   * });
   * ```
   */
  create(
    body: VoucherCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoucherCreateResponse> {
    return this._client.post('/v1/create-voucher', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Voucher
   *
   * @example
   * ```ts
   * await client.vouchers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VoucherRetrieveResponse> {
    return this._client.get(path`/v0/vouchers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Redeem Voucher
   *
   * @example
   * ```ts
   * await client.vouchers.redeem({ code: 'string' });
   * ```
   */
  redeem(
    body: VoucherRedeemParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoucherRedeemResponse> {
    return this._client.post('/v0/redeem-voucher', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke Voucher
   *
   * @example
   * ```ts
   * await client.vouchers.revoke({ code: 'string' });
   * ```
   */
  revoke(
    body: VoucherRevokeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoucherRevokeResponse> {
    return this._client.post('/v0/revoke-voucher', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VoucherCreateParams {
  /**
   * The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * Note or comment for this Charge (visible to payer)
   */
  description?: string;
}

export interface VoucherRedeemParams {
  /**
   * Valid 8-digit ZBD Voucher Code
   */
  code?: string;
}

export interface VoucherRevokeParams {
  /**
   * Valid 8-digit ZBD Voucher Code
   */
  code?: string;
}

export declare namespace Vouchers {
  export {
    type VoucherCreateParams as VoucherCreateParams,
    type VoucherRedeemParams as VoucherRedeemParams,
    type VoucherRevokeParams as VoucherRevokeParams,
  };
}
