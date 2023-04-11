/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ScheduledEvents {
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
   * Cancel Event
   *
   * @remarks
   * Cancels specified event.
   */
  cancel(
    req: operations.PostScheduledEventsUuidCancellationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScheduledEventsUuidCancellationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScheduledEventsUuidCancellationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/scheduled_events/{uuid}/cancellation",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostScheduledEventsUuidCancellationResponse =
        new operations.PostScheduledEventsUuidCancellationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postScheduledEventsUuidCancellation201ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellation201ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.PostScheduledEventsUuidCancellationErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postScheduledEventsUuidCancellation403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostScheduledEventsUuidCancellation403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Create Invitee No Show
   *
   * @remarks
   * Marks an Invitee as a No Show.
   */
  createNoShow(
    req: operations.PostInviteeNoShowRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInviteeNoShowRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invitee_no_shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostInviteeNoShowResponse =
        new operations.PostInviteeNoShowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postInviteeNoShow201ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostInviteeNoShow201ApplicationJSON
              );
          }
          break;
        case [400, 401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.PostInviteeNoShowErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Event
   *
   * @remarks
   * Returns information about a specified Event.
   */
  getEventByUuid(
    req: operations.GetScheduledEventsUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledEventsUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduledEventsUuidRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/scheduled_events/{uuid}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetScheduledEventsUuidResponse =
        new operations.GetScheduledEventsUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getScheduledEventsUuid200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuid200ApplicationJSON
              );
          }
          break;
        case [401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetScheduledEventsUuidErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getScheduledEventsUuid403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsUuid403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List Event Invitees
   *
   * @remarks
   * Returns a list of Invitees for an event.
   */
  getInvitees(
    req: operations.GetInviteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInviteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInviteesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/scheduled_events/{uuid}/invitees",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetInviteesResponse =
        new operations.GetInviteesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getInvitees200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvitees200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetInviteesErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getInvitees403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvitees403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Event Invitee
   *
   * @remarks
   * Returns information about a specified Invitee (person invited to an event).
   */
  getInviteesByUuid(
    req: operations.GetScheduledEventsEventUuidInviteesInviteeUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetScheduledEventsEventUuidInviteesInviteeUuidRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/scheduled_events/{event_uuid}/invitees/{invitee_uuid}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse =
        new operations.GetScheduledEventsEventUuidInviteesInviteeUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Invitee No Show
   *
   * @remarks
   * Returns information about a specified Invitee No Show.
   */
  getNoShow(
    req: operations.GetInviteeNoShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInviteeNoShowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/invitee_no_shows/{uuid}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetInviteeNoShowResponse =
        new operations.GetInviteeNoShowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getInviteeNoShow200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInviteeNoShow200ApplicationJSON
              );
          }
          break;
        case [400, 401, 403, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetInviteeNoShowErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List Events
   *
   * @remarks
   * Returns a list of  Events.
   *
   * * Pass `organization` parameter to return events for that organization (requires admin/owner privilege)
   * * Pass `user` parameter to return events for a specific User
   *
   * **NOTES:**
   * * If you are the admin/owner of the organization, you can use both `organization` and `user` to get a list of events for a specific user within your organization.
   *
   * * `user` can only be used alone when requesting your own personal events. This will return your events within any organization that you are currently in or were a part of in the past.
   */
  list(
    req: operations.ListScheduledEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListScheduledEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListScheduledEventsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scheduled_events";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListScheduledEventsResponse =
        new operations.ListScheduledEventsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listScheduledEvents200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListScheduledEvents200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListScheduledEventsErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listScheduledEvents403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListScheduledEvents403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Delete Invitee No Show
   *
   * @remarks
   * Undoes marking an Invitee as a No Show.
   */
  unmarkNoShow(
    req: operations.DeleteInviteeNoShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInviteeNoShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInviteeNoShowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/invitee_no_shows/{uuid}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteInviteeNoShowResponse =
        new operations.DeleteInviteeNoShowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        case [401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.DeleteInviteeNoShowErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
