/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetUserAvailabilitySchedulesUuidRequest extends SpeakeasyBase {
  /**
   * The UUID of the availability schedule.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export enum GetUserAvailabilitySchedulesUuid403ApplicationJSONMessageEnum {
  ThisUserIsNotInYourOrganization = "This user is not in your organization",
}

export enum GetUserAvailabilitySchedulesUuid403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class GetUserAvailabilitySchedulesUuid403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetUserAvailabilitySchedulesUuid403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetUserAvailabilitySchedulesUuid403ApplicationJSONTitleEnum;
}

export class GetUserAvailabilitySchedulesUuidErrorResponseDetails extends SpeakeasyBase {
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
export class GetUserAvailabilitySchedulesUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetUserAvailabilitySchedulesUuidErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => GetUserAvailabilitySchedulesUuidErrorResponseDetails)
  details?: GetUserAvailabilitySchedulesUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

/**
 * OK
 */
export class GetUserAvailabilitySchedulesUuid200ApplicationJSON extends SpeakeasyBase {
  /**
   * The availability schedule set by the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.AvailabilitySchedule)
  resource: shared.AvailabilitySchedule;
}

export class GetUserAvailabilitySchedulesUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetUserAvailabilitySchedulesUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getUserAvailabilitySchedulesUuid200ApplicationJSONObject?: GetUserAvailabilitySchedulesUuid200ApplicationJSON;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  getUserAvailabilitySchedulesUuid403ApplicationJSONObject?: GetUserAvailabilitySchedulesUuid403ApplicationJSON;
}
