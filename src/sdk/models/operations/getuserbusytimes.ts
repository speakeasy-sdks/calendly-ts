/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetUserBusyTimesQueryParams extends SpeakeasyBase {
  /**
   * End time of the requested availability range
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_time",
  })
  endTime: string;

  /**
   * Start time of the requested availability range
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_time",
  })
  startTime: string;

  /**
   * The uri associated with the user
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}

export class GetUserBusyTimesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserBusyTimesQueryParams;
}

export enum GetUserBusyTimes403ApplicationJSONMessageEnum {
  ThisUserIsNotInYourOrganization = "This user is not in your organization",
}

export enum GetUserBusyTimes403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class GetUserBusyTimes403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetUserBusyTimes403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetUserBusyTimes403ApplicationJSONTitleEnum;
}

export class GetUserBusyTimesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

/**
 * Error Object
 */
export class GetUserBusyTimesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetUserBusyTimesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetUserBusyTimesErrorResponseDetails)
  details?: GetUserBusyTimesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

/**
 * Service Response
 */
export class GetUserBusyTimes200ApplicationJSON extends SpeakeasyBase {
  /**
   * The set of internal and external scheduled calendar events matching the criteria
   */
  @SpeakeasyMetadata({ elemType: shared.UserBusyTime })
  @Expose({ name: "collection" })
  @Type(() => shared.UserBusyTime)
  collection: shared.UserBusyTime[];
}

export class GetUserBusyTimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetUserBusyTimesErrorResponse;

  /**
   * Unable to access external calendar
   */
  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getUserBusyTimes200ApplicationJSONObject?: GetUserBusyTimes200ApplicationJSON;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  getUserBusyTimes403ApplicationJSONObject?: GetUserBusyTimes403ApplicationJSON;
}
