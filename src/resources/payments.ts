// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Retrieve all data about a single Payment.
   */
  retrieve(
    id: string,
    params: PaymentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/payments/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Start sending instant Bitcoin payments through the ZBD API.
   */
  send(params: PaymentSendParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/payments', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface PaymentRetrieveParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export interface PaymentSendParams {
  /**
   * Body param: Amount to be paid to this Charge/Invoice -> in millisatoshis _(only
   * valid if Amountless Invoice)_
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Payment updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or comment for this Payment
   */
  description?: string;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Body param: Lightning Network Payment Request / Charge
   */
  invoice?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace Payments {
  export { type PaymentRetrieveParams as PaymentRetrieveParams, type PaymentSendParams as PaymentSendParams };
}
