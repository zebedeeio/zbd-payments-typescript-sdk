// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_address',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'validate_lightning_address',
  description: 'Verify the validity of a Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { address } = args;
  return client.lightningAddress.validate(address);
};

export default { metadata, tool, handler };
