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
  name: 'retrieve_by_gamertag_gamertags',
  description: 'Retrieve Gamertag from a ZBD user ID.',
  inputSchema: {
    type: 'object',
    properties: {
      gamertag: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { gamertag } = args;
  return client.gamertags.retrieveByGamertag(gamertag);
};

export default { metadata, tool, handler };
