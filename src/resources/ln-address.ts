// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LnAddress extends APIResource {
  /**
   * Generate a payment request for a Lightning Address.
   */
  createCharge(
    params: LnAddressCreateChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/ln-address/fetch-charge', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Send instant Bitcoin payments to any Lightning Address.
   */
  sendPayment(
    params: LnAddressSendPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/ln-address/send-payment', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Verify the validity of a Lightning Address.
   */
  validate(
    address: string,
    params: LnAddressValidateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey } = params ?? {};
    return this._client.get(path`/v0/ln-address/validate/${address}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface LnAddressCreateChargeParams {
  /**
   * Body param: The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: Note or comment of this Charge
   */
  description?: string;

  /**
   * Body param: The Lightning Address of the intended recipient
   */
  lnaddress?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface LnAddressSendPaymentParams {
  /**
   * Body param: The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Note or description of this Payment
   */
  comment?: string;

  /**
   * Body param: Open metadata string property
   */
  internalId?: string;

  /**
   * Body param: The Lightning Address of the intended recipient (e.g. andre@zbd.gg)
   */
  lnAddress?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export interface LnAddressValidateParams {
  /**
   * ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace LnAddress {
  export {
    type LnAddressCreateChargeParams as LnAddressCreateChargeParams,
    type LnAddressSendPaymentParams as LnAddressSendPaymentParams,
    type LnAddressValidateParams as LnAddressValidateParams,
  };
}
