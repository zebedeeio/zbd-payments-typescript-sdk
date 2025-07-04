// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export interface EmailPaymentSendResponse {
  id: string;
  fee: string;
  unit: string;
  amount: string;
  invoice: string;
  preimage: string;
  processedAt: string;
  confirmedAt: string;
  status: string;
  comment: string;
  email: string;
  receiverUserId?: string;
}

export class EmailPayments extends APIResource {
  /**
   * Send instant Bitcoin payments to any email.
   *
   * @example
   * ```ts
   * await client.emailPayments.send({
   *   amount: 'string',
   *   comment: 'string',
   *   email: 'string',
   * });
   * ```
   */
  send(
    body: EmailPaymentSendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailPaymentSendResponse> {
    return this._client.post('/v0/email/send-payment', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EmailPaymentSendParams {
  /**
   * The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * Note / description of this Payment (may be shown to recipient)
   */
  comment?: string;

  /**
   * The Email of the intended recipient (e.g. info@zebedee.io)
   */
  email?: string;
}

export declare namespace EmailPayments {
  export {
    type EmailPaymentSendResponse as EmailPaymentSendResponse,
    type EmailPaymentSendParams as EmailPaymentSendParams,
  };
}
