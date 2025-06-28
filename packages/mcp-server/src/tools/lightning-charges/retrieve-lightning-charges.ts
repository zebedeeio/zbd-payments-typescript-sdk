// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/charges/{id}',
  operationId: 'get_v0_charges_id',
};

export const tool: Tool = {
  name: 'retrieve_lightning_charges',
  description: 'Retrieve all data about a single Charge.',
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
  const response = await client.lightningCharges.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
