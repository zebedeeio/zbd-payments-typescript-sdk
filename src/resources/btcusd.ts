// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Btcusd extends APIResource {
  /**
   * Get the latest price for Bitcoin in US Dollars.
   */
  retrievePrice(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v0/btcusd', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
