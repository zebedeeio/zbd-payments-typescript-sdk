// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class DecodeInvoice extends APIResource {
  /**
   * Understand the inner properties of a Charge QR code.
   */
  decode(
    params: DecodeInvoiceDecodeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/decode-invoice', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface DecodeInvoiceDecodeParams {
  /**
   * Body param: The Charge or Invoice QR code contents
   */
  invoice?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace DecodeInvoice {
  export { type DecodeInvoiceDecodeParams as DecodeInvoiceDecodeParams };
}
