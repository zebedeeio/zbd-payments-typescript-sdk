// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class ProdIPs extends APIResource {
  /**
   * Get the official IP addresses of ZBD servers.
   */
  list(params: ProdIPListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get('/v0/prod-ips', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ProdIPListParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace ProdIPs {
  export { type ProdIPListParams as ProdIPListParams };
}
