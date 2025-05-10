// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbddev/payments-sdk';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_charge_gamertags from './gamertags/create-charge-gamertags';
import retrieve_by_gamertag_gamertags from './gamertags/retrieve-by-gamertag-gamertags';
import retrieve_by_zbd_id_gamertags from './gamertags/retrieve-by-zbd-id-gamertags';
import retrieve_payment_gamertags from './gamertags/retrieve-payment-gamertags';
import send_payment_gamertags from './gamertags/send-payment-gamertags';
import create_lightning_charges from './lightning-charges/create-lightning-charges';
import retrieve_lightning_charges from './lightning-charges/retrieve-lightning-charges';
import initiate_internal_transfer from './internal-transfer/initiate-internal-transfer';
import create_charge_lightning_address from './lightning-address/create-charge-lightning-address';
import send_payment_lightning_address from './lightning-address/send-payment-lightning-address';
import validate_lightning_address from './lightning-address/validate-lightning-address';
import create_lightning_static_charges from './lightning-static-charges/create-lightning-static-charges';
import retrieve_lightning_static_charges from './lightning-static-charges/retrieve-lightning-static-charges';
import update_lightning_static_charges from './lightning-static-charges/update-lightning-static-charges';
import create_vouchers from './vouchers/create-vouchers';
import retrieve_vouchers from './vouchers/retrieve-vouchers';
import redeem_vouchers from './vouchers/redeem-vouchers';
import revoke_vouchers from './vouchers/revoke-vouchers';
import create_withdrawal_requests from './withdrawal-requests/create-withdrawal-requests';
import retrieve_withdrawal_requests from './withdrawal-requests/retrieve-withdrawal-requests';
import retrieve_lightning_payments from './lightning-payments/retrieve-lightning-payments';
import send_lightning_payments from './lightning-payments/send-lightning-payments';
import retrieve_balance_wallet from './wallet/retrieve-balance-wallet';
import check_ip_support_utils from './utils/check-ip-support-utils';
import decode_lightning_charge_utils from './utils/decode-lightning-charge-utils';
import list_prod_ips_utils from './utils/list-prod-ips-utils';
import retrieve_btc_usd_utils from './utils/retrieve-btc-usd-utils';
import create_authorization_url_oauth2 from './oauth2/create-authorization-url-oauth2';
import refresh_token_oauth2 from './oauth2/refresh-token-oauth2';
import retrieve_user_data_oauth2 from './oauth2/retrieve-user-data-oauth2';
import retrieve_wallet_data_oauth2 from './oauth2/retrieve-wallet-data-oauth2';
import send_keysend_payments from './keysend-payments/send-keysend-payments';
import send_email_payments from './email-payments/send-email-payments';

export type HandlerFunction = (
  client: ZbdPayments,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_charge_gamertags);
addEndpoint(retrieve_by_gamertag_gamertags);
addEndpoint(retrieve_by_zbd_id_gamertags);
addEndpoint(retrieve_payment_gamertags);
addEndpoint(send_payment_gamertags);
addEndpoint(create_lightning_charges);
addEndpoint(retrieve_lightning_charges);
addEndpoint(initiate_internal_transfer);
addEndpoint(create_charge_lightning_address);
addEndpoint(send_payment_lightning_address);
addEndpoint(validate_lightning_address);
addEndpoint(create_lightning_static_charges);
addEndpoint(retrieve_lightning_static_charges);
addEndpoint(update_lightning_static_charges);
addEndpoint(create_vouchers);
addEndpoint(retrieve_vouchers);
addEndpoint(redeem_vouchers);
addEndpoint(revoke_vouchers);
addEndpoint(create_withdrawal_requests);
addEndpoint(retrieve_withdrawal_requests);
addEndpoint(retrieve_lightning_payments);
addEndpoint(send_lightning_payments);
addEndpoint(retrieve_balance_wallet);
addEndpoint(check_ip_support_utils);
addEndpoint(decode_lightning_charge_utils);
addEndpoint(list_prod_ips_utils);
addEndpoint(retrieve_btc_usd_utils);
addEndpoint(create_authorization_url_oauth2);
addEndpoint(refresh_token_oauth2);
addEndpoint(retrieve_user_data_oauth2);
addEndpoint(retrieve_wallet_data_oauth2);
addEndpoint(send_keysend_payments);
addEndpoint(send_email_payments);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
