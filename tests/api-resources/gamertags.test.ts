// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from 'zbd-payments';

const client = new ZbdPayments({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gamertags', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCharge', async () => {
    const responsePromise = client.gamertags.createCharge();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCharge: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gamertags.createCharge(
        {
          amount: 'string',
          callbackUrl: '‎',
          description: '‎',
          expiresIn: 0,
          gamertag: 'string',
          internalId: '‎',
          apikey: 'apikey',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByGamertag', async () => {
    const responsePromise = client.gamertags.retrieveByGamertag('gamertag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByGamertag: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gamertags.retrieveByGamertag(
        'gamertag',
        { apikey: 'apikey' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByZbdID', async () => {
    const responsePromise = client.gamertags.retrieveByZbdID('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByZbdID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gamertags.retrieveByZbdID('id', { apikey: 'apikey' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePayment', async () => {
    const responsePromise = client.gamertags.retrievePayment('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePayment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gamertags.retrievePayment('id', { apikey: 'apikey' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendPayment', async () => {
    const responsePromise = client.gamertags.sendPayment();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendPayment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gamertags.sendPayment(
        { amount: 'string', description: '‎', gamertag: 'string', apikey: 'apikey' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
