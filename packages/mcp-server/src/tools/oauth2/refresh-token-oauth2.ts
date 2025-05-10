// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'refresh_token_oauth2',
  description: 'Generate a new accessToken for a ZBD Login user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  return client.oauth2.refreshToken();
};

export default { metadata, tool, handler };
