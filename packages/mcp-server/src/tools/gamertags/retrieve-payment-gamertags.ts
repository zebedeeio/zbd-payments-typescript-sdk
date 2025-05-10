// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_payment_gamertags',
  description: 'Retrieve all data about a Payment sent to ZBD User.',
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
  return client.gamertags.retrievePayment(id);
};

export default { metadata, tool, handler };
