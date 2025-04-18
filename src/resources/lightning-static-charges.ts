// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LightningStaticCharges extends APIResource {
  /**
   * Start accepting payments on Lightning with Static QR codes.
   */
  create(
    params: LightningStaticChargeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/static-charges', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve all data about a single Static Charge.
   */
  retrieve(
    id: string,
    params: LightningStaticChargeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/static-charges/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Change the configuration of a Static Charge QR code.
   */
  update(
    id: string,
    params: LightningStaticChargeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.patch(path`/v0/static-charges/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface LightningStaticChargeCreateParams {
  /**
   * Body param: Number of payments this Static Charge can accept
   */
  allowedSlots?: number;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Static Charge (visible to payer)
   */
  description?: string;

  /**
   * Body param: Used for Custom Lightning Addresses (see guide)
   */
  identifier?: string;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Body param: Maximum allowed amount for the Static Charge -> in millisatoshis
   */
  maxAmount?: string;

  /**
   * Body param: Minimum allowed amount for the Static Charge -> in millisatoshis
   */
  minAmount?: string;

  /**
   * Body param: Message displayed to the payer AFTER payment settles. Maximum of 144
   * characters.
   */
  successMessage?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface LightningStaticChargeRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface LightningStaticChargeUpdateParams {
  /**
   * Body param: Number of payments this Static Charge can accept
   */
  allowedSlots?: number;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Static Charge (visible to payer)
   */
  description?: string;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Body param: Maximum allowed amount for the Static Charge -> in millisatoshis
   */
  maxAmount?: string;

  /**
   * Body param: Minimum allowed amount for the Static Charge -> in millisatoshis
   */
  minAmount?: string;

  /**
   * Body param: Message displayed to the payer AFTER payment settles
   */
  successMessage?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace LightningStaticCharges {
  export {
    type LightningStaticChargeCreateParams as LightningStaticChargeCreateParams,
    type LightningStaticChargeRetrieveParams as LightningStaticChargeRetrieveParams,
    type LightningStaticChargeUpdateParams as LightningStaticChargeUpdateParams,
  };
}
