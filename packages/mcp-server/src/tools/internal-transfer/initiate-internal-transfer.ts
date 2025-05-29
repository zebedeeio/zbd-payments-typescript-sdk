// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'internal_transfer',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/internal-transfer',
  operationId: 'post_v0_internal-transfer',
};

export const tool: Tool = {
  name: 'initiate_internal_transfer',
  description: 'Performs a transfer of funds between two Projects.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount to be transferred -> in millisatoshis',
      },
      receiverWalletId: {
        type: 'string',
        description: 'The Wallet ID of the recipient Project',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.internalTransfer.initiate(body);
};

export default { metadata, tool, handler };
