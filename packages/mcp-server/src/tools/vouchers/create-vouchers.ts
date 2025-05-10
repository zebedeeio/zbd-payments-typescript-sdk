// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'vouchers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_vouchers',
  description: 'Create Voucher',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Charge -> in millisatoshis',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Charge (visible to payer)',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.vouchers.create(body);
};

export default { metadata, tool, handler };
