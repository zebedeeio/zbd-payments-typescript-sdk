// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ZbdPayments } from '../client';

export abstract class APIResource {
  protected _client: ZbdPayments;

  constructor(client: ZbdPayments) {
    this._client = client;
  }
}
