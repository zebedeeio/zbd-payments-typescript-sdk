// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'decode_lightning_charge_utils',
  description: 'Understand the inner properties of a Charge QR code.',
  inputSchema: {
    type: 'object',
    properties: {
      invoice: {
        type: 'string',
        description: 'The Charge or Invoice QR code contents',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: any) => {
  const { ...body } = args;
  return client.utils.decodeLightningCharge(body);
};

export default { metadata, tool, handler };
