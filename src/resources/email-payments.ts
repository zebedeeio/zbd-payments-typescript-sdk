// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class EmailPayments extends APIResource {
  /**
   * Send instant Bitcoin payments to any email.
   */
  sendPayment(
    params: EmailPaymentSendPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apikey, ...body } = params ?? {};
    return this._client.post('/v0/email/send-payment', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(apikey != null ? { apikey: apikey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface EmailPaymentSendPaymentParams {
  /**
   * Body param: The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Body param: Note / description of this Payment (may be shown to recipient)
   */
  comment?: string;

  /**
   * Body param: The Email of the intended recipient (e.g. info@zebedee.io)
   */
  email?: string;

  /**
   * Header param: ZBD Project API Key
   */
  apikey?: string;
}

export declare namespace EmailPayments {
  export { type EmailPaymentSendPaymentParams as EmailPaymentSendPaymentParams };
}
