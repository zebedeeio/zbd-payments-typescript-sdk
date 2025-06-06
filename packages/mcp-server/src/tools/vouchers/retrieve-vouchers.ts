// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbddev/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'vouchers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/vouchers/{id}',
  operationId: 'get_v0_vouchers_VOUCHER_ID',
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

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.vouchers.retrieve(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
