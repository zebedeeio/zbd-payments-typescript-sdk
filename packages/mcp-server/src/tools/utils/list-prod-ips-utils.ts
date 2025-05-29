// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/prod-ips',
  operationId: 'get_v0_prod-ips',
};

export const tool: Tool = {
  name: 'list_prod_ips_utils',
  description: 'Get the official IP addresses of ZBD servers.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  return client.utils.listProdIPs();
};

export default { metadata, tool, handler };
