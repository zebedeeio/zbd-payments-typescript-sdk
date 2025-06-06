// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbddev/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'withdrawal_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/withdrawal-requests/{id}',
  operationId: 'get_v0_withdrawal-requests_id',
};

export const tool: Tool = {
  name: 'retrieve_withdrawal_requests',
  description: 'Retrieve all data about a single Withdrawal Request.',
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
  await client.withdrawalRequests.retrieve(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
