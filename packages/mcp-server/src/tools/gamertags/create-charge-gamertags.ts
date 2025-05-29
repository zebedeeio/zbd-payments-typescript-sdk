// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/gamertag/charges',
  operationId: 'post_v0_gamertag_charges',
};

export const tool: Tool = {
  name: 'create_charge_gamertags',
  description: 'Generate a payment request for a ZBD User.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Payment (visible to recipient)',
      },
      expiresIn: {
        type: 'number',
        description: 'Time until Charge expiration -> in seconds',
      },
      gamertag: {
        type: 'string',
        description: 'Destination ZBD Gamertag',
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
  return client.gamertags.createCharge(body);
};

export default { metadata, tool, handler };
