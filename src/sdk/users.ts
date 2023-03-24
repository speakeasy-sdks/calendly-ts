/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Users {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Get current user
   *
   * @remarks
   * Returns basic information about your user account.
   */
  getMyUserAccount(
    config?: AxiosRequestConfig
  ): Promise<operations.GetMyUserAccountResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users/me";

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetMyUserAccountResponse =
        new operations.GetMyUserAccountResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getMyUserAccount200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetMyUserAccount200ApplicationJSON
              );
          }
          break;
        case [401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetMyUserAccountErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get user
   *
   * @remarks
   * Returns information about a specified User.
   */
  getUser(
    req: operations.GetUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/users/{uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetUserResponse = new operations.GetUserResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUser200ApplicationJSONObject = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetUser200ApplicationJSON
            );
          }
          break;
        case [401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetUserErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
