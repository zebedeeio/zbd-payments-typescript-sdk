// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'vouchers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_vouchers',
  description: 'Get Voucher',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { id } = args;
  return client.vouchers.retrieve(id);
};

export default { metadata, tool, handler };
