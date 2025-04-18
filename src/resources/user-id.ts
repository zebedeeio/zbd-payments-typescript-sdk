// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UserID extends APIResource {
  /**
   * Retrieve Gamertag from a ZBD user ID.
   */
  retrieveByGamertag(
    gamertag: string,
    params: UserIDRetrieveByGamertagParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/user-id/gamertag/${gamertag}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface UserIDRetrieveByGamertagParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace UserID {
  export { type UserIDRetrieveByGamertagParams as UserIDRetrieveByGamertagParams };
}
