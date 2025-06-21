// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export interface Oauth2CreateAuthorizationURLResponse {
  authorizationUrl: string;
  state: string;
  expiresAt: string;
}

export interface Oauth2RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  scope: string;
}

export interface Oauth2RetrieveUserDataResponse {
  id: string;
  email: string;
  gamertag: string;
  isVerified: boolean;
  lightningAddress: string;
  createdAt: string;
  image?: string;
  publicBio?: string;
  twitterHandle?: string;
}

export interface Oauth2RetrieveWalletDataResponse {
  unit: string;
  balance: string;
  id: string;
}

export class Oauth2 extends APIResource {
  /**
   * Create an authorization URL for ZBD Login.
   */
  createAuthorizationURL(options?: RequestOptions): APIPromise<Oauth2CreateAuthorizationURLResponse> {
    return this._client.get('/v1/oauth2/authorize', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a new accessToken for a ZBD Login user.
   */
  refreshToken(options?: RequestOptions): APIPromise<Oauth2RefreshTokenResponse> {
    return this._client.post('/v1/oauth2/token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch user-related information about a logged-in ZBD User.
   */
  retrieveUserData(
    params: Oauth2RetrieveUserDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Oauth2RetrieveUserDataResponse> {
    const { usertoken } = params ?? {};
    return this._client.get('/v1/oauth2/user', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(usertoken != null ? { usertoken: usertoken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Fetch wallet-related information about a logged-in ZBD User.
   */
  retrieveWalletData(
    params: Oauth2RetrieveWalletDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Oauth2RetrieveWalletDataResponse> {
    const { usertoken } = params ?? {};
    return this._client.get('/v1/oauth2/wallet', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(usertoken != null ? { usertoken: usertoken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Oauth2RetrieveUserDataParams {
  /**
   * OAuth2 Access Token
   */
  usertoken?: string;
}

export interface Oauth2RetrieveWalletDataParams {
  /**
   * OAuth2 Access Token
   */
  usertoken?: string;
}

export declare namespace Oauth2 {
  export {
    type Oauth2CreateAuthorizationURLResponse as Oauth2CreateAuthorizationURLResponse,
    type Oauth2RefreshTokenResponse as Oauth2RefreshTokenResponse,
    type Oauth2RetrieveUserDataResponse as Oauth2RetrieveUserDataResponse,
    type Oauth2RetrieveWalletDataResponse as Oauth2RetrieveWalletDataResponse,
    type Oauth2RetrieveUserDataParams as Oauth2RetrieveUserDataParams,
    type Oauth2RetrieveWalletDataParams as Oauth2RetrieveWalletDataParams,
  };
}
