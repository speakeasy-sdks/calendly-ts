import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class EventTypes {
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
   * getEventTypesUuid - Get Event Type
   *
   * Returns information about a specified Event Type.
  **/
  getEventTypesUuid(
    req: operations.GetEventTypesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTypesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTypesUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/event_types/{uuid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventTypesUuidResponse =
            new operations.GetEventTypesUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getEventTypesUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEventTypeAvailableTimes - List Event Type Available Times
   *
   * Returns a list of available times for an event type within a specified date range.
   * 
   * Date range can be no greater than 1 week (7 days).
   * 
   * **NOTE:**
   * * This endpoint does not support traditional keyset pagination.
  **/
  getEventTypeAvailableTimes(
    req: operations.GetEventTypeAvailableTimesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTypeAvailableTimesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTypeAvailableTimesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/event_type_available_times";
    
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
        const res: operations.GetEventTypeAvailableTimesResponse =
            new operations.GetEventTypeAvailableTimesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getEventTypeAvailableTimes200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimes200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypeAvailableTimesErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEventTypes - List User's Event Types
   *
   * Returns all Event Types associated with a specified User. Use:
   * 
   * * `organization` to look up all Event Types that belong to the organization
   * 
   * * `user` to look up a user's Event Types in an organization
   * 
   * Either `organization` or `user` are required query params when using this endpoint.
  **/
  getEventTypes(
    req: operations.GetEventTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/event_types";
    
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
        const res: operations.GetEventTypesResponse =
            new operations.GetEventTypesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getEventTypes200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypes200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getEventTypes403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypes403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEventTypesErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
