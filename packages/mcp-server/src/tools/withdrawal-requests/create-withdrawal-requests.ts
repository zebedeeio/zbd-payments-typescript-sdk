// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'withdrawal_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_withdrawal_requests',
  description: 'Start creating Bitcoin voucher QR codes.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Withdrawal Request -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Withdrawal Request',
      },
      expiresIn: {
        type: 'number',
        description: 'Time until Withdrawal Request expiration -> in seconds',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.withdrawalRequests.create(body);
};

export default { metadata, tool, handler };
