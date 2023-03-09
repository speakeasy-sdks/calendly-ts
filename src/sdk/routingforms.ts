import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class RoutingForms {
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
   * getRoutingFormSubmissions - List Routing Form Submissions
   *
   * Get a list of Routing Form Submissions for a specified Routing Form.
  **/
  getRoutingFormSubmissions(
    req: operations.GetRoutingFormSubmissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingFormSubmissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingFormSubmissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/routing_form_submissions";
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoutingFormSubmissionsResponse =
            new operations.GetRoutingFormSubmissionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getRoutingFormSubmissions200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissions200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoutingFormSubmissionsUuid - Get Routing Form Submission
   *
   * Get a specified Routing Form Submission.
  **/
  getRoutingFormSubmissionsUuid(
    req: operations.GetRoutingFormSubmissionsUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingFormSubmissionsUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingFormSubmissionsUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing_form_submissions/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoutingFormSubmissionsUuidResponse =
            new operations.GetRoutingFormSubmissionsUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getRoutingFormSubmissionsUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormSubmissionsUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoutingForms - List Routing Forms
   *
   * Get a list of Routing Forms for a specified Organization.
  **/
  getRoutingForms(
    req: operations.GetRoutingFormsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingFormsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingFormsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/routing_forms";
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoutingFormsResponse =
            new operations.GetRoutingFormsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getRoutingForms200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingForms200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoutingFormsUuid - Get Routing Form
   *
   * Get a specified Routing Form.
  **/
  getRoutingFormsUuid(
    req: operations.GetRoutingFormsUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingFormsUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingFormsUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing_forms/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoutingFormsUuidResponse =
            new operations.GetRoutingFormsUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getRoutingFormsUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRoutingFormsUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
