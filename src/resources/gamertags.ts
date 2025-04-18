// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Gamertags extends APIResource {
  /**
   * Generate a payment request for a ZBD User.
   */
  createCharge(
    params: GamertagCreateChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/gamertag/charges', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve Gamertag from a ZBD user ID.
   */
  retrieveByGamertag(
    gamertag: string,
    params: GamertagRetrieveByGamertagParams | null | undefined = {},
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

  /**
   * Retrieve ZBD user ID from a Gamertag.
   */
  retrieveByZbdID(
    id: string,
    params: GamertagRetrieveByZbdIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/gamertag/user-id/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve all data about a Payment sent to ZBD User.
   */
  retrievePayment(
    id: string,
    params: GamertagRetrievePaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/gamertag/transaction/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Send instant Bitcoin payments to ZBD Users.
   */
  sendPayment(
    params: GamertagSendPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/gamertag/send-payment', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface GamertagCreateChargeParams {
  /**
   * Body param: The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Payment (visible to recipient)
   */
  description?: string;

  /**
   * Body param: Time until Charge expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Body param: Destination ZBD Gamertag
   */
  gamertag?: string;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface GamertagRetrieveByGamertagParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface GamertagRetrieveByZbdIDParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface GamertagRetrievePaymentParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface GamertagSendPaymentParams {
  /**
   * Body param: The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: Note or comment for this Payment (visible to recipient)
   */
  description?: string;

  /**
   * Body param: Destination ZBD Gamertag
   */
  gamertag?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Gamertags {
  export {
    type GamertagCreateChargeParams as GamertagCreateChargeParams,
    type GamertagRetrieveByGamertagParams as GamertagRetrieveByGamertagParams,
    type GamertagRetrieveByZbdIDParams as GamertagRetrieveByZbdIDParams,
    type GamertagRetrievePaymentParams as GamertagRetrievePaymentParams,
    type GamertagSendPaymentParams as GamertagSendPaymentParams,
  };
}
