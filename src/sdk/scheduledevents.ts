import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ScheduledEvents {
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
   * deleteInviteeNoShow - Delete Invitee No Show
   *
   * Undoes marking an Invitee as a No Show.
  **/
  deleteInviteeNoShow(
    req: operations.DeleteInviteeNoShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInviteeNoShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/invitee_no_shows/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInviteeNoShowResponse =
            new operations.DeleteInviteeNoShowResponse({
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
                operations.DeleteInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteInviteeNoShowErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getScheduledEventsEventUuidInviteesInviteeUuid - Get Event Invitee
   *
   * Returns information about a specified Invitee (person invited to an event).
  **/
  getScheduledEventsEventUuidInviteesInviteeUuid(
    req: operations.GetScheduledEventsEventUuidInviteesInviteeUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduledEventsEventUuidInviteesInviteeUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{event_uuid}/invitees/{invitee_uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse =
            new operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse1 = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getScheduledEventsUuid - Get Event
   *
   * Returns information about a specified Event.
  **/
  getScheduledEventsUuid(
    req: operations.GetScheduledEventsUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledEventsUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduledEventsUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetScheduledEventsUuidResponse =
            new operations.GetScheduledEventsUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getScheduledEventsUuid200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuid200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getScheduledEventsUuid403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuid403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuidErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuidErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInviteeNoShow - Get Invitee No Show
   *
   * Returns information about a specified Invitee No Show.
  **/
  getInviteeNoShow(
    req: operations.GetInviteeNoShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInviteeNoShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/invitee_no_shows/{uuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInviteeNoShowResponse =
            new operations.GetInviteeNoShowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getInviteeNoShow200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShow200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShowErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInvitees - List Event Invitees
   *
   * Returns a list of Invitees for an event.
  **/
  getInvitees(
    req: operations.GetInviteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInviteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInviteesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{uuid}/invitees", req.pathParams);
    
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
        const res: operations.GetInviteesResponse =
            new operations.GetInviteesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getInvitees200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvitees200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getInvitees403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvitees403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteesErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteesErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getScheduledEvents - List Events
   *
   * Returns a list of  Events.
   * 
   * * Pass `organization` parameter to return events for that organization (requires admin/owner privilege)
   * * Pass `user` parameter to return events for a specific User
   * 
   * **NOTES:**
   * * If you are the admin/owner of the organization, you can use both `organization` and `user` to get a list of events for a specific user within your organization.
   * 
   * * `user` can only be used alone when requesting your own personal events. This will return your events within any organization that you are currently in or were a part of in the past.
  **/
  getScheduledEvents(
    req: operations.GetScheduledEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduledEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scheduled_events";
    
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
        const res: operations.GetScheduledEventsResponse =
            new operations.GetScheduledEventsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getScheduledEvents200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEvents200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getScheduledEvents403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEvents403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postScheduledEventsUuidCancellationJson - Cancel Event
   *
   * Cancels specified event.
  **/
  postScheduledEventsUuidCancellationJson(
    req: operations.PostScheduledEventsUuidCancellationJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScheduledEventsUuidCancellationJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScheduledEventsUuidCancellationJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{uuid}/cancellation", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PostScheduledEventsUuidCancellationJsonResponse =
            new operations.PostScheduledEventsUuidCancellationJsonResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationJSON201ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJson201ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJsonErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJsonErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationJSON403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJson403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJsonErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationJsonErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postScheduledEventsUuidCancellationMultipart - Cancel Event
   *
   * Cancels specified event.
  **/
  postScheduledEventsUuidCancellationMultipart(
    req: operations.PostScheduledEventsUuidCancellationMultipartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScheduledEventsUuidCancellationMultipartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScheduledEventsUuidCancellationMultipartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{uuid}/cancellation", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PostScheduledEventsUuidCancellationMultipartResponse =
            new operations.PostScheduledEventsUuidCancellationMultipartResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationMultipart201ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipart201ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipartErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipartErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationMultipart403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipart403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipartErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationMultipartErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postScheduledEventsUuidCancellationRaw - Cancel Event
   *
   * Cancels specified event.
  **/
  postScheduledEventsUuidCancellationRaw(
    req: operations.PostScheduledEventsUuidCancellationRawRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScheduledEventsUuidCancellationRawResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScheduledEventsUuidCancellationRawRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scheduled_events/{uuid}/cancellation", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PostScheduledEventsUuidCancellationRawResponse =
            new operations.PostScheduledEventsUuidCancellationRawResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationRaw201ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRaw201ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRawErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRawErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postScheduledEventsUuidCancellationRaw403ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRaw403ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRawErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellationRawErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postInviteeNoShow - Create Invitee No Show
   *
   * Marks an Invitee as a No Show.
  **/
  postInviteeNoShow(
    req: operations.PostInviteeNoShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInviteeNoShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invitee_no_shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PostInviteeNoShowResponse =
            new operations.PostInviteeNoShowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postInviteeNoShow201ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShow201ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShowErrorResponse,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShowErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
