// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'email_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/email/send-payment',
  operationId: 'post_v0_email_send-payment',
};

export const tool: Tool = {
  name: 'send_email_payments',
  description: 'Send instant Bitcoin payments to any email.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      comment: {
        type: 'string',
        description: 'Note / description of this Payment (may be shown to recipient)',
      },
      email: {
        type: 'string',
        description: 'The Email of the intended recipient (e.g. info@zebedee.io)',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.emailPayments.send(body);
};

export default { metadata, tool, handler };
