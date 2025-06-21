// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export interface GamertagCreateChargeResponse {
  id: string;
  unit: string;
  amount: string;
  createdAt: string;
  expiresAt: string;
  description: string;
  status: string;
  invoice: {
    request: string;
    uri: string;
  };
  onchain: string;
  internalId?: string;
  callbackUrl?: string;
  gamertag: string;
}

export interface GamertagRetrieveByGamertagResponse {
  gamertag: string;
  id: string;
  createdAt: string;
  isVerified: boolean;
  lightningAddress: string;
  nostrPubkey?: string;
}

export interface GamertagRetrieveByZbdIDResponse {
  userId: string;
  gamertag: string;
  isVerified: boolean;
  lightningAddress: string;
  createdAt: string;
}

export interface GamertagRetrievePaymentResponse {
  id: string;
  fee: string;
  unit: string;
  amount: string;
  invoice: string;
  preimage: string;
  processedAt: string;
  confirmedAt: string;
  status: string;
  description: string;
  gamertag: string;
  internalId?: string;
}

export interface GamertagSendPaymentResponse {
  id: string;
  fee: string;
  unit: string;
  amount: string;
  invoice: string;
  preimage: string;
  processedAt: string;
  confirmedAt: string;
  status: string;
  description: string;
  gamertag: string;
}

export class Gamertags extends APIResource {
  /**
   * Generate a payment request for a ZBD User.
   *
   * @example
   * ```ts
   * await client.gamertags.createCharge({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   description: 'string',
   *   expiresIn: NaN,
   *   gamertag: 'string',
   *   internalId: 'string',
   * });
   * ```
   */
  createCharge(
    body: GamertagCreateChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GamertagCreateChargeResponse> {
    return this._client.post('/v0/gamertag/charges', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve Gamertag from a ZBD user ID.
   *
   * @example
   * ```ts
   * await client.gamertags.retrieveByGamertag('gamertag');
   * ```
   */
  retrieveByGamertag(gamertag: string, options?: RequestOptions): APIPromise<GamertagRetrieveByGamertagResponse> {
    return this._client.get(path`/v0/user-id/gamertag/${gamertag}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve ZBD user ID from a Gamertag.
   *
   * @example
   * ```ts
   * await client.gamertags.retrieveByZbdID('id');
   * ```
   */
  retrieveByZbdID(id: string, options?: RequestOptions): APIPromise<GamertagRetrieveByZbdIDResponse> {
    return this._client.get(path`/v0/gamertag/user-id/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all data about a Payment sent to ZBD User.
   *
   * @example
   * ```ts
   * await client.gamertags.retrievePayment('id');
   * ```
   */
  retrievePayment(id: string, options?: RequestOptions): APIPromise<GamertagRetrievePaymentResponse> {
    return this._client.get(path`/v0/gamertag/transaction/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send instant Bitcoin payments to ZBD Users.
   *
   * @example
   * ```ts
   * await client.gamertags.sendPayment({
   *   amount: 'string',
   *   description: 'string',
   *   gamertag: 'string',
   * });
   * ```
   */
  sendPayment(
    body: GamertagSendPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GamertagSendPaymentResponse> {
    return this._client.post('/v0/gamertag/send-payment', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GamertagCreateChargeParams {
  /**
   * The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Payment (visible to recipient)
   */
  description?: string;

  /**
   * Time until Charge expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Destination ZBD Gamertag
   */
  gamertag?: string;

  /**
   * Open metadata string property
   */
  internalId?: string;
}

export interface GamertagSendPaymentParams {
  /**
   * The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Note or comment for this Payment (visible to recipient)
   */
  description?: string;

  /**
   * Destination ZBD Gamertag
   */
  gamertag?: string;
}

export declare namespace Gamertags {
  export {
    type GamertagCreateChargeResponse as GamertagCreateChargeResponse,
    type GamertagRetrieveByGamertagResponse as GamertagRetrieveByGamertagResponse,
    type GamertagRetrieveByZbdIDResponse as GamertagRetrieveByZbdIDResponse,
    type GamertagRetrievePaymentResponse as GamertagRetrievePaymentResponse,
    type GamertagSendPaymentResponse as GamertagSendPaymentResponse,
    type GamertagCreateChargeParams as GamertagCreateChargeParams,
    type GamertagSendPaymentParams as GamertagSendPaymentParams,
  };
}
