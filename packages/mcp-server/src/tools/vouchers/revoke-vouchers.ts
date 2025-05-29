// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'vouchers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/revoke-voucher',
  operationId: 'post_v0_revoke-voucher',
};

export const tool: Tool = {
  name: 'revoke_vouchers',
  description: 'Revoke Voucher',
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

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.vouchers.revoke(body);
};

export default { metadata, tool, handler };
