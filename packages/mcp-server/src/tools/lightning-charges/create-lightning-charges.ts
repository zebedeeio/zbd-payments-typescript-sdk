// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_charges',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_lightning_charges',
  description: 'Start receiving instant Bitcoin payments through the ZBD API.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Charge -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Charge (visible to payer)',
      },
      expiresIn: {
        type: 'number',
        description: 'Time until Charge expiration -> in seconds',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.lightningCharges.create(body);
};

export default { metadata, tool, handler };
