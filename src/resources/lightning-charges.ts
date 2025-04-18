// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LightningCharges extends APIResource {
  /**
   * Start receiving instant Bitcoin payments through the ZBD API.
   */
  create(
    params: LightningChargeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/charges', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve all data about a single Charge.
   */
  retrieve(
    id: string,
    params: LightningChargeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/charges/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface LightningChargeCreateParams {
  /**
   * Body param: The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Charge (visible to payer)
   */
  description?: string;

  /**
   * Body param: Time until Charge expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface LightningChargeRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace LightningCharges {
  export {
    type LightningChargeCreateParams as LightningChargeCreateParams,
    type LightningChargeRetrieveParams as LightningChargeRetrieveParams,
  };
}
