// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class KeysendPayment extends APIResource {
  /**
   * Start sending Keysend payments on the Lightning Network.
   */
  send(params: KeysendPaymentSendParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/keysend-payment', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface KeysendPaymentSendParams {
  /**
   * Body param: The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: The endpoint ZBD will POST Keysend Payment updates to
   */
  callbackUrl?: string;

  /**
   * Body param: Open metadata object property
   */
  metadata?: unknown;

  /**
   * Body param: The Public Key for the destination Lightning node
   */
  pubkey?: string;

  /**
   * Body param: List of TLV records <Expandable title="tlvRecord" defaultOpen>
   * <ParamField body="type" type="number" initialValue={123456}> type of the TLV
   * record
   */
  tlvRecords?: Array<string>;

  /**
   * Body param: value of the TLV record (hex encoded string)
   */
  value?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace KeysendPayment {
  export { type KeysendPaymentSendParams as KeysendPaymentSendParams };
}
