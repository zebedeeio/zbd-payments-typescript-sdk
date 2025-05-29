// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/btcusd',
  operationId: 'get_v0_btcusd',
};

export const tool: Tool = {
  name: 'retrieve_btc_usd_utils',
  description: 'Get the latest price for Bitcoin in US Dollars.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  return client.utils.retrieveBtcUsd();
};

export default { metadata, tool, handler };
