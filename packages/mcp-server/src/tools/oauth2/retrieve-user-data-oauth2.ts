// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_user_data_oauth2',
  description: 'Fetch user-related information about a logged-in ZBD User.',
  inputSchema: {
    type: 'object',
    properties: {
      usertoken: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.oauth2.retrieveUserData(body);
};

export default { metadata, tool, handler };
