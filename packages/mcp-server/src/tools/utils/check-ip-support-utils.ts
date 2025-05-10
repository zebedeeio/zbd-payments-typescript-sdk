// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'check_ip_support_utils',
  description: 'Verify if a user is coming from a supported region.',
  inputSchema: {
    type: 'object',
    properties: {
      ip: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { ip, ...body } = args as any;
  return client.utils.checkIPSupport(ip);
};

export default { metadata, tool, handler };
