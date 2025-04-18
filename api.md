# Gamertags

Methods:

- <code title="post /v0/gamertag/charges">client.gamertags.<a href="./src/resources/gamertags.ts">createCharge</a>({ ...params }) -> void</code>
- <code title="get /v0/user-id/gamertag/{gamertag}">client.gamertags.<a href="./src/resources/gamertags.ts">retrieveByGamertag</a>(gamertag) -> void</code>
- <code title="get /v0/gamertag/user-id/{id}">client.gamertags.<a href="./src/resources/gamertags.ts">retrieveByZbdID</a>(id) -> void</code>
- <code title="get /v0/gamertag/transaction/{id}">client.gamertags.<a href="./src/resources/gamertags.ts">retrievePayment</a>(id) -> void</code>
- <code title="post /v0/gamertag/send-payment">client.gamertags.<a href="./src/resources/gamertags.ts">sendPayment</a>({ ...params }) -> void</code>

# LightningCharges

Methods:

- <code title="post /v0/charges">client.lightningCharges.<a href="./src/resources/lightning-charges.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/charges/{id}">client.lightningCharges.<a href="./src/resources/lightning-charges.ts">retrieve</a>(id) -> void</code>

# InternalTransfer

Methods:

- <code title="post /v0/internal-transfer">client.internalTransfer.<a href="./src/resources/internal-transfer.ts">initiate</a>({ ...params }) -> void</code>

# LightningAddress

Methods:

- <code title="post /v0/ln-address/fetch-charge">client.lightningAddress.<a href="./src/resources/lightning-address.ts">createCharge</a>({ ...params }) -> void</code>
- <code title="post /v0/ln-address/send-payment">client.lightningAddress.<a href="./src/resources/lightning-address.ts">sendPayment</a>({ ...params }) -> void</code>
- <code title="get /v0/ln-address/validate/{address}">client.lightningAddress.<a href="./src/resources/lightning-address.ts">validate</a>(address) -> void</code>

# LightningStaticCharges

Methods:

- <code title="post /v0/static-charges">client.lightningStaticCharges.<a href="./src/resources/lightning-static-charges.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/static-charges/{id}">client.lightningStaticCharges.<a href="./src/resources/lightning-static-charges.ts">retrieve</a>(id) -> void</code>
- <code title="patch /v0/static-charges/{id}">client.lightningStaticCharges.<a href="./src/resources/lightning-static-charges.ts">update</a>(id, { ...params }) -> void</code>

# Vouchers

Methods:

- <code title="post /v1/create-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/vouchers/{id}">client.vouchers.<a href="./src/resources/vouchers.ts">retrieve</a>(id) -> void</code>
- <code title="post /v0/redeem-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">redeem</a>({ ...params }) -> void</code>
- <code title="post /v0/revoke-voucher">client.vouchers.<a href="./src/resources/vouchers.ts">revoke</a>({ ...params }) -> void</code>

# WithdrawalRequests

Methods:

- <code title="post /v0/withdrawal-requests">client.withdrawalRequests.<a href="./src/resources/withdrawal-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v0/withdrawal-requests/{id}">client.withdrawalRequests.<a href="./src/resources/withdrawal-requests.ts">retrieve</a>(id) -> void</code>

# LightningPayments

Methods:

- <code title="get /v0/payments/{id}">client.lightningPayments.<a href="./src/resources/lightning-payments.ts">retrieve</a>(id) -> void</code>
- <code title="post /v0/payments">client.lightningPayments.<a href="./src/resources/lightning-payments.ts">send</a>({ ...params }) -> void</code>

# Wallet

Methods:

- <code title="get /v0/wallet">client.wallet.<a href="./src/resources/wallet.ts">retrieveBalance</a>() -> void</code>

# Utils

Methods:

- <code title="get /v0/is-supported-region/{ip}">client.utils.<a href="./src/resources/utils.ts">checkIPSupport</a>(ip) -> void</code>
- <code title="post /v0/decode-invoice">client.utils.<a href="./src/resources/utils.ts">decodeLightningCharge</a>({ ...params }) -> void</code>
- <code title="get /v0/prod-ips">client.utils.<a href="./src/resources/utils.ts">listProdIPs</a>() -> void</code>
- <code title="get /v0/btcusd">client.utils.<a href="./src/resources/utils.ts">retrieveBtcUsd</a>() -> void</code>

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

- <code title="post /v0/email/send-payment">client.emailPayments.<a href="./src/resources/email-payments.ts">send</a>({ ...params }) -> void</code>
