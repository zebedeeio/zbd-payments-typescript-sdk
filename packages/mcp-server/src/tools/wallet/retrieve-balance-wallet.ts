// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'wallet',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_balance_wallet',
  description: "Retrieve all data about a ZBD Project's Wallet.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const {} = args;
  return client.wallet.retrieveBalance();
};

export default { metadata, tool, handler };
