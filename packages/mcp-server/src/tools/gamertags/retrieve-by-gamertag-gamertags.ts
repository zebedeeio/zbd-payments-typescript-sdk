// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbddev/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/user-id/gamertag/{gamertag}',
  operationId: 'get_v0_user-id_gamertag_GAMERTAG',
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

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { gamertag, ...body } = args as any;
  await client.gamertags.retrieveByGamertag(gamertag);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
