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
  name: 'redeem_vouchers',
  description: 'Redeem Voucher',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        description: 'Valid 8-digit ZBD Voucher Code',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.vouchers.redeem(body);
};

export default { metadata, tool, handler };
