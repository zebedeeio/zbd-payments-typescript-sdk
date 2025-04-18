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
  retrieveBtcusd(options?: RequestOptions): APIPromise<void> {
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

export interface UtilListProdIPsParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Utils {
  export {
    type UtilCheckIPSupportParams as UtilCheckIPSupportParams,
    type UtilListProdIPsParams as UtilListProdIPsParams,
  };
}
