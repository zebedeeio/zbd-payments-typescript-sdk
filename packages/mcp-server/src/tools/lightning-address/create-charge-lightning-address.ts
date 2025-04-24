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
  name: 'create_charge_lightning_address',
  description: 'Generate a payment request for a Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Charge -> in millisatoshis',
      },
      description: {
        type: 'string',
        description: 'Note or comment of this Charge',
      },
      lnaddress: {
        type: 'string',
        description: 'The Lightning Address of the intended recipient',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.lightningAddress.createCharge(body);
};

export default { metadata, tool, handler };
