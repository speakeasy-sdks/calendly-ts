import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Webhooks {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteUsersUserUuidWebhooksWebhookUuid - Delete Webhook Subscription
   *
   * Delete a Webhook Subscription.
  **/
  deleteUsersUserUuidWebhooksWebhookUuid(
    req: operations.DeleteUsersUserUuidWebhooksWebhookUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersUserUuidWebhooksWebhookUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersUserUuidWebhooksWebhookUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhook_subscriptions/{webhook_uuid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUsersUserUuidWebhooksWebhookUuidResponse =
            new operations.DeleteUsersUserUuidWebhooksWebhookUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUsersUserUuidWebhooksWebhookUuid - Get Webhook Subscription
   *
   * Get a specified Webhook Subscription.
  **/
  getUsersUserUuidWebhooksWebhookUuid(
    req: operations.GetUsersUserUuidWebhooksWebhookUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserUuidWebhooksWebhookUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserUuidWebhooksWebhookUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhook_subscriptions/{webhook_uuid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersUserUuidWebhooksWebhookUuidResponse =
            new operations.GetUsersUserUuidWebhooksWebhookUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getUsersUserUuidWebhooksWebhookUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUsersUserUuidWebhooksWebhookUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUsersUserUuidWebhooksWebhookUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhooks - List Webhook Subscriptions
   *
   * Get a list of Webhook Subscriptions for a specified Organization or User.
  **/
  getWebhooks(
    req: operations.GetWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook_subscriptions";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksResponse =
            new operations.GetWebhooksResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWebhooks200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhooks200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhooksErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhooksErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWebhooks403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhooks403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhooksErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postUsersUuidWebhooks - Create Webhook Subscription
   *
   * Create a Webhook Subscription for an Organization or User.
   * 
   * * The `organization` subscription scope triggers the webhook for all subscribed events within the organization.
   * * The `user` subscription scope only triggers the webhook for subscribed events that belong to the specific user.
   * 
   * | Event | Allowed Subscription Scopes |
   * | ----- | --------------------------- |
   * | <pre>invitee.created</pre> | `organization` `user` |
   * | <pre>invitee.canceled</pre> | `organization` `user` |
   * | <pre>routing_form_submission.created</pre> | `organization` <br /> <small>Create separate Webhook Subscriptions for events with different subscription scopes.</small> |
  **/
  postUsersUuidWebhooks(
    req: operations.PostUsersUuidWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUuidWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUuidWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook_subscriptions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUsersUuidWebhooksResponse =
            new operations.PostUsersUuidWebhooksResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postUsersUuidWebhooks201ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooks201ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooksErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooksErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postUsersUuidWebhooks403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooks403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooksErrorResponse,
              );
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostUsersUuidWebhooksErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
