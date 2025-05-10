// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ZbdPayments from '@zbddev/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_static_charges',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_lightning_static_charges',
  description: 'Change the configuration of a Static Charge QR code.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      allowedSlots: {
        type: 'number',
        description: 'Number of payments this Static Charge can accept',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Static Charge (visible to payer)',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      maxAmount: {
        type: 'string',
        description: 'Maximum allowed amount for the Static Charge -> in millisatoshis',
      },
      minAmount: {
        type: 'string',
        description: 'Minimum allowed amount for the Static Charge -> in millisatoshis',
      },
      successMessage: {
        type: 'string',
        description: 'Message displayed to the payer AFTER payment settles',
      },
    },
  },
};

export const handler = (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.lightningStaticCharges.update(id, body);
};

export default { metadata, tool, handler };
