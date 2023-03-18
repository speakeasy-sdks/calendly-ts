import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Availability {
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
   * getUserAvailabilitySchedules - List User Availability Schedules
   *
   * Returns the availability schedules of the given user.
   **/
  getUserAvailabilitySchedules(
    req: operations.GetUserAvailabilitySchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserAvailabilitySchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserAvailabilitySchedulesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/user_availability_schedules";

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetUserAvailabilitySchedulesResponse =
        new operations.GetUserAvailabilitySchedulesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserAvailabilitySchedules200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserAvailabilitySchedules200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetUserAvailabilitySchedulesErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserAvailabilitySchedules403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserAvailabilitySchedules403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getUserAvailabilitySchedulesUuid - Get User Availability Schedule
   *
   * This will return the availability schedule of the given UUID.
   **/
  getUserAvailabilitySchedulesUuid(
    req: operations.GetUserAvailabilitySchedulesUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserAvailabilitySchedulesUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserAvailabilitySchedulesUuidRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/user_availability_schedules/{uuid}",
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
      const res: operations.GetUserAvailabilitySchedulesUuidResponse =
        new operations.GetUserAvailabilitySchedulesUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserAvailabilitySchedulesUuid200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserAvailabilitySchedulesUuid200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetUserAvailabilitySchedulesUuidErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserAvailabilitySchedulesUuid403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserAvailabilitySchedulesUuid403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 500:
          break;
      }

      return res;
    });
  }

  /**
   * getUserBusyTimes - List User Busy Times
   *
   * Returns an ascending list of user internal and external scheduled events within a specified date range.
   *
   * Date range can be no greater than 1 week (7 days).
   *
   * **NOTE:**
   * * This endpoint does not support traditional keyset pagination.
   * * External events will only be returned for calendars that have "Check for conflicts" configured.
   **/
  getUserBusyTimes(
    req: operations.GetUserBusyTimesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserBusyTimesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserBusyTimesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user_busy_times";

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetUserBusyTimesResponse =
        new operations.GetUserBusyTimesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserBusyTimes200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserBusyTimes200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetUserBusyTimesErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserBusyTimes403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetUserBusyTimes403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 424:
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
}
