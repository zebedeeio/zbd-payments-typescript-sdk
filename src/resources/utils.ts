// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export interface UtilCheckIPSupportResponse {
  isSupported: boolean;
  ipAddress: string;
  region: string;
  country?: string;
  message?: string;
}

export interface UtilDecodeLightningChargeResponse {
  amount: string | null;
  timestamp: number;
  expiresAt: number | null;
  description: string;
  paymentHash: string;
  destination: string;
  numSatoshis: string;
  numMilliSatoshis: string;
  routeHints: Array<{
    hopHints: Array<{
      nodeId: string;
      chanId: string;
      feeBaseMsat: number;
      feeProportionalMillionths: number;
      cltvExpiryDelta: number;
    }>;
  }>;
  fallbackAddr?: string;
  cltvExpiry: number;
}

export interface UtilListProdIPsResponse {
  ips: string[];
  ipRanges: string[];
  updatedAt: string;
}

export interface UtilRetrieveBtcUsdResponse {
  btcUsdPrice: string;
  timestamp: string;
  source: string;
}

export class Utils extends APIResource {
  /**
   * Verify if a user is coming from a supported region.
   *
   * @example
   * ```ts
   * await client.utils.checkIPSupport('ip');
   * ```
   */
  checkIPSupport(ip: string, options?: RequestOptions): APIPromise<UtilCheckIPSupportResponse> {
    return this._client.get(path`/v0/is-supported-region/${ip}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Understand the inner properties of a Charge QR code.
   *
   * @example
   * ```ts
   * await client.utils.decodeLightningCharge({
   *   invoice: 'string',
   * });
   * ```
   */
  decodeLightningCharge(
    body: UtilDecodeLightningChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UtilDecodeLightningChargeResponse> {
    return this._client.post('/v0/decode-invoice', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the official IP addresses of ZBD servers.
   *
   * @example
   * ```ts
   * await client.utils.listProdIPs();
   * ```
   */
  listProdIPs(options?: RequestOptions): APIPromise<UtilListProdIPsResponse> {
    return this._client.get('/v0/prod-ips', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the latest price for Bitcoin in US Dollars.
   *
   * @example
   * ```ts
   * await client.utils.retrieveBtcUsd();
   * ```
   */
  retrieveBtcUsd(options?: RequestOptions): APIPromise<UtilRetrieveBtcUsdResponse> {
    return this._client.get('/v0/btcusd', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UtilDecodeLightningChargeParams {
  /**
   * The Charge or Invoice QR code contents
   */
  invoice?: string;
}

export declare namespace Utils {
  export {
    type UtilCheckIPSupportResponse as UtilCheckIPSupportResponse,
    type UtilDecodeLightningChargeResponse as UtilDecodeLightningChargeResponse,
    type UtilListProdIPsResponse as UtilListProdIPsResponse,
    type UtilRetrieveBtcUsdResponse as UtilRetrieveBtcUsdResponse,
    type UtilDecodeLightningChargeParams as UtilDecodeLightningChargeParams,
  };
}
