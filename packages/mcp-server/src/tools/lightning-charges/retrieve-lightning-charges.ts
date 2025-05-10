// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_charges',
  operation: 'read',
  tags: [],
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

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.lightningCharges.retrieve(id);
};

export default { metadata, tool, handler };
