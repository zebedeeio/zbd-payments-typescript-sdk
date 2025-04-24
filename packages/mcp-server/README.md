# ZBD Payments TypeScript MCP Server

## Installation

### Direct invocation

You can run the ZBD Payments MCP Server directly via `npx`:

```sh
export ZBD_PAYMENTS_API_KEY="YOUR_ZBD_API_KEY"
npx -y @zbddev/payments-sdk-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "zbddev_payments_sdk_api": {
      "command": "npx",
      "args": ["-y", "@zbddev/payments-sdk-mcp"],
      "env": {
        "ZBD_PAYMENTS_API_KEY": "YOUR_ZBD_API_KEY"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the ZBD MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@zbddev/payments-sdk-mcp/server";

// import a specific tool
import createChargeGamertags from "@zbddev/payments-sdk-mcp/tools/gamertags/create-charge-gamertags";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createChargeGamertags, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `gamertags`:

- `create_charge_gamertags` (`write`): Generate a payment request for a ZBD User.
- `retrieve_by_gamertag_gamertags` (`read`): Retrieve Gamertag from a ZBD user ID.
- `retrieve_by_zbd_id_gamertags` (`read`): Retrieve ZBD user ID from a Gamertag.
- `retrieve_payment_gamertags` (`read`): Retrieve all data about a Payment sent to ZBD User.
- `send_payment_gamertags` (`write`): Send instant Bitcoin payments to ZBD Users.

### Resource `lightning_charges`:

- `create_lightning_charges` (`write`): Start receiving instant Bitcoin payments through the ZBD API.
- `retrieve_lightning_charges` (`read`): Retrieve all data about a single Charge.

### Resource `internal_transfer`:

- `initiate_internal_transfer` (`write`): Performs a transfer of funds between two Projects.

### Resource `lightning_address`:

- `create_charge_lightning_address` (`write`): Generate a payment request for a Lightning Address.
- `send_payment_lightning_address` (`write`): Send instant Bitcoin payments to any Lightning Address.
- `validate_lightning_address` (`read`): Verify the validity of a Lightning Address.

### Resource `lightning_static_charges`:

- `create_lightning_static_charges` (`write`): Start accepting payments on Lightning with Static QR codes.
- `retrieve_lightning_static_charges` (`read`): Retrieve all data about a single Static Charge.
- `update_lightning_static_charges` (`write`): Change the configuration of a Static Charge QR code.

### Resource `vouchers`:

- `create_vouchers` (`write`): Create Voucher
- `retrieve_vouchers` (`read`): Get Voucher
- `redeem_vouchers` (`write`): Redeem Voucher
- `revoke_vouchers` (`write`): Revoke Voucher

### Resource `withdrawal_requests`:

- `create_withdrawal_requests` (`write`): Start creating Bitcoin voucher QR codes.
- `retrieve_withdrawal_requests` (`read`): Retrieve all data about a single Withdrawal Request.

### Resource `lightning_payments`:

- `retrieve_lightning_payments` (`read`): Retrieve all data about a single Payment.
- `send_lightning_payments` (`write`): Start sending instant Bitcoin payments through the ZBD API.

### Resource `wallet`:

- `retrieve_balance_wallet` (`read`): Retrieve all data about a ZBD Project's Wallet.

### Resource `utils`:

- `check_ip_support_utils` (`read`): Verify if a user is coming from a supported region.
- `decode_lightning_charge_utils` (`write`): Understand the inner properties of a Charge QR code.
- `list_prod_ips_utils` (`read`): Get the official IP addresses of ZBD servers.
- `retrieve_btc_usd_utils` (`read`): Get the latest price for Bitcoin in US Dollars.

### Resource `oauth2`:

- `create_authorization_url_oauth2` (`read`): Create an authorization URL for ZBD Login.
- `refresh_token_oauth2` (`write`): Generate a new accessToken for a ZBD Login user.
- `retrieve_user_data_oauth2` (`read`): Fetch user-related information about a logged-in ZBD User.
- `retrieve_wallet_data_oauth2` (`read`): Fetch wallet-related information about a logged-in ZBD User.

### Resource `keysend_payments`:

- `send_keysend_payments` (`write`): Start sending Keysend payments on the Lightning Network.

### Resource `email_payments`:

- `send_email_payments` (`write`): Send instant Bitcoin payments to any email.
