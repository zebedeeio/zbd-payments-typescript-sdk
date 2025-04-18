# Gamertag

Methods:

- <code title="post /v0/gamertag/charges">client.gamertag.<a href="./src/resources/gamertag.ts">createCharge</a>({ ...params }) -> void</code>
- <code title="get /v0/user-id/gamertag/{gamertag}">client.gamertag.<a href="./src/resources/gamertag.ts">retrieveByGamertag</a>(gamertag, { ...params }) -> void</code>
- <code title="get /v0/gamertag/user-id/{id}">client.gamertag.<a href="./src/resources/gamertag.ts">retrieveByZbdID</a>(id, { ...params }) -> void</code>
- <code title="get /v0/gamertag/transaction/{id}">client.gamertag.<a href="./src/resources/gamertag.ts">retrievePayment</a>(id, { ...params }) -> void</code>
- <code title="post /v0/gamertag/send-payment">client.gamertag.<a href="./src/resources/gamertag.ts">sendPayment</a>({ ...params }) -> void</code>

# Charges

Methods:

- <code title="post /v0/charges">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/charges/{id}">client.charges.<a href="./src/resources/charges.ts">retrieve</a>(id, { ...params }) -> void</code>

# InternalTransfer

Methods:

- <code title="post /v0/internal-transfer">client.internalTransfer.<a href="./src/resources/internal-transfer.ts">initiate</a>({ ...params }) -> void</code>

# LnAddress

Methods:

- <code title="post /v0/ln-address/fetch-charge">client.lnAddress.<a href="./src/resources/ln-address.ts">createCharge</a>({ ...params }) -> void</code>
- <code title="post /v0/ln-address/send-payment">client.lnAddress.<a href="./src/resources/ln-address.ts">sendPayment</a>({ ...params }) -> void</code>
- <code title="get /v0/ln-address/validate/{address}">client.lnAddress.<a href="./src/resources/ln-address.ts">validate</a>(address, { ...params }) -> void</code>

# StaticCharges

Methods:

- <code title="post /v0/static-charges">client.staticCharges.<a href="./src/resources/static-charges.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/static-charges/{id}">client.staticCharges.<a href="./src/resources/static-charges.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="patch /v0/static-charges/{id}">client.staticCharges.<a href="./src/resources/static-charges.ts">update</a>(id, { ...params }) -> void</code>

# Vouchers

Methods:

- <code title="post /v1/create-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/vouchers/{id}">client.vouchers.<a href="./src/resources/vouchers.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /v0/redeem-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">redeem</a>({ ...params }) -> void</code>
- <code title="post /v0/revoke-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">revoke</a>({ ...params }) -> void</code>

# WithdrawalRequests

Methods:

- <code title="post /v0/withdrawal-requests">client.withdrawalRequests.<a href="./src/resources/withdrawal-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/withdrawal-requests/{id}">client.withdrawalRequests.<a href="./src/resources/withdrawal-requests.ts">retrieve</a>(id, { ...params }) -> void</code>

# DecodeInvoice

Methods:

- <code title="post /v0/decode-invoice">client.decodeInvoice.<a href="./src/resources/decode-invoice.ts">decode</a>({ ...params }) -> void</code>

# Payments

Methods:

- <code title="get /v0/payments/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /v0/payments">client.payments.<a href="./src/resources/payments.ts">send</a>({ ...params }) -> void</code>

# Wallet

Methods:

- <code title="get /v0/wallet">client.wallet.<a href="./src/resources/wallet.ts">retrieveBalance</a>({ ...params }) -> void</code>

# Utils

Methods:

- <code title="get /v0/is-supported-region/{ip}">client.utils.<a href="./src/resources/utils.ts">checkIPSupport</a>(ip, { ...params }) -> void</code>
- <code title="get /v0/prod-ips">client.utils.<a href="./src/resources/utils.ts">listProdIPs</a>({ ...params }) -> void</code>
- <code title="get /v0/btcusd">client.utils.<a href="./src/resources/utils.ts">retrieveBtcusd</a>() -> void</code>

# Oauth2

Methods:

- <code title="get /v1/oauth2/authorize">client.oauth2.<a href="./src/resources/oauth2.ts">createAuthorizationURL</a>() -> void</code>
- <code title="post /v1/oauth2/token">client.oauth2.<a href="./src/resources/oauth2.ts">refreshToken</a>() -> void</code>
- <code title="get /v1/oauth2/user">client.oauth2.<a href="./src/resources/oauth2.ts">retrieveUserData</a>({ ...params }) -> void</code>
- <code title="get /v1/oauth2/wallet">client.oauth2.<a href="./src/resources/oauth2.ts">retrieveWalletData</a>({ ...params }) -> void</code>

# KeysendPayments

Methods:

- <code title="post /v0/keysend-payment">client.keysendPayments.<a href="./src/resources/keysend-payments.ts">send</a>({ ...params }) -> void</code>

# EmailPayments

Methods:

- <code title="post /v0/email/send-payment">client.emailPayments.<a href="./src/resources/email-payments.ts">sendPayment</a>({ ...params }) -> void</code>
