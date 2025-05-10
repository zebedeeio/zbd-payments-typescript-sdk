// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'keysend_payments',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'send_keysend_payments',
  description: 'Start sending Keysend payments on the Lightning Network.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Keysend Payment updates to',
      },
      metadata: {
        type: 'object',
        description: 'Open metadata object property',
      },
      pubkey: {
        type: 'string',
        description: 'The Public Key for the destination Lightning node',
      },
      tlvRecords: {
        type: 'array',
        description:
          'List of TLV records\n  <Expandable title="tlvRecord" defaultOpen>\n    <ParamField body="type" type="number" initialValue={123456}>\n      type of the TLV record',
        items: {
          type: 'string',
        },
      },
      value: {
        type: 'string',
        description: 'value of the TLV record (hex encoded string)',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.keysendPayments.send(body);
};

export default { metadata, tool, handler };
