// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbddev/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_address',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/ln-address/fetch-charge',
  operationId: 'post_v0_ln-address_fetch-charge',
};

export const tool: Tool = {
  name: 'create_charge_lightning_address',
  description: 'Generate a payment request for a Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Charge -> in millisatoshis',
      },
      description: {
        type: 'string',
        description: 'Note or comment of this Charge',
      },
      lnaddress: {
        type: 'string',
        description: 'The Lightning Address of the intended recipient',
      },
    },
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.lightningAddress.createCharge(body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
