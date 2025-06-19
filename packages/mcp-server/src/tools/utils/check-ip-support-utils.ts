// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/is-supported-region/{ip}',
  operationId: 'get_v0_is-supported-region_IP_ADDRESS',
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

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { ip, ...body } = args as any;
  await client.utils.checkIPSupport(ip);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
