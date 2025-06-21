// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/payments/{id}',
  operationId: 'get_v0_payments_id',
};

export const tool: Tool = {
  name: 'retrieve_lightning_payments',
  description: 'Retrieve all data about a single Payment.',
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
  const result = await client.lightningPayments.retrieve(id);
  return asTextContentResult(result);
};

export default { metadata, tool, handler };
