// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_address',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'send_payment_lightning_address',
  description: 'Send instant Bitcoin payments to any Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      comment: {
        type: 'string',
        description: 'Note or description of this Payment',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      lnAddress: {
        type: 'string',
        description: 'The Lightning Address of the intended recipient (e.g. andre@zbd.gg)',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.lightningAddress.sendPayment(body);
};

export default { metadata, tool, handler };
