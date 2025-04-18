// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Utils extends APIResource {
  /**
   * Verify if a user is coming from a supported region.
   */
  checkIPSupport(
    ip: string,
    params: UtilCheckIPSupportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/is-supported-region/${ip}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Understand the inner properties of a Charge QR code.
   */
  decodeLightningCharge(
    params: UtilDecodeLightningChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/decode-invoice', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get the official IP addresses of ZBD servers.
   */
  listProdIPs(
    params: UtilListProdIPsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get('/v0/prod-ips', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get the latest price for Bitcoin in US Dollars.
   */
  retrieveBtcUsd(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v0/btcusd', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UtilCheckIPSupportParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface UtilDecodeLightningChargeParams {
  /**
   * Body param: The Charge or Invoice QR code contents
   */
  invoice?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface UtilListProdIPsParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Utils {
  export {
    type UtilCheckIPSupportParams as UtilCheckIPSupportParams,
    type UtilDecodeLightningChargeParams as UtilDecodeLightningChargeParams,
    type UtilListProdIPsParams as UtilListProdIPsParams,
  };
}
