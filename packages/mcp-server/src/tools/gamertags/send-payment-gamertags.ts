// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'send_payment_gamertags',
  description: 'Send instant Bitcoin payments to ZBD Users.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Payment (visible to recipient)',
      },
      gamertag: {
        type: 'string',
        description: 'Destination ZBD Gamertag',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.gamertags.sendPayment(body);
};

export default { metadata, tool, handler };
