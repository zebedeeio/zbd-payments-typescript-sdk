// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbddev/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/oauth2/authorize',
  operationId: 'get_v1_oauth2_authorize',
};

export const tool: Tool = {
  name: 'create_authorization_url_oauth2',
  description: 'Create an authorization URL for ZBD Login.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  await client.oauth2.createAuthorizationURL();
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
