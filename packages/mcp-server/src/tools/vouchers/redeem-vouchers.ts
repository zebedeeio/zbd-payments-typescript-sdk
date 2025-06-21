// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'vouchers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/redeem-voucher',
  operationId: 'post_v0_redeem-voucher',
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

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const result = await client.vouchers.redeem(body);
  return asTextContentResult(result);
};

export default { metadata, tool, handler };
