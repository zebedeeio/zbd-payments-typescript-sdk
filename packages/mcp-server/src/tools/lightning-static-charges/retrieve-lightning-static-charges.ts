// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_static_charges',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_lightning_static_charges',
  description: 'Retrieve all data about a single Static Charge.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { id } = args;
  return client.lightningStaticCharges.retrieve(id);
};

export default { metadata, tool, handler };
