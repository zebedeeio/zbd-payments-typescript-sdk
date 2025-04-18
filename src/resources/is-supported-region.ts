// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IsSupportedRegion extends APIResource {
  /**
   * Verify if a user is coming from a supported region.
   */
  check(
    ip: string,
    params: IsSupportedRegionCheckParams | null | undefined = {},
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
}

export interface IsSupportedRegionCheckParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace IsSupportedRegion {
  export { type IsSupportedRegionCheckParams as IsSupportedRegionCheckParams };
}
