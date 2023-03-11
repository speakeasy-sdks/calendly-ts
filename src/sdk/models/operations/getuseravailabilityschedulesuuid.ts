import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetUserAvailabilitySchedulesUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetUserAvailabilitySchedulesUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserAvailabilitySchedulesUuidPathParams;
}

export class GetUserAvailabilitySchedulesUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetUserAvailabilitySchedulesUuidErrorResponse
/** 
 * Error Object
**/
export class GetUserAvailabilitySchedulesUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetUserAvailabilitySchedulesUuidErrorResponseDetails })
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
export enum GetUserAvailabilitySchedulesUuid403ApplicationJSONMessageEnum {
    ThisUserIsNotInYourOrganization = "This user is not in your organization"
}
export enum GetUserAvailabilitySchedulesUuid403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class GetUserAvailabilitySchedulesUuid403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetUserAvailabilitySchedulesUuid403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetUserAvailabilitySchedulesUuid403ApplicationJSONTitleEnum;
}

export class GetUserAvailabilitySchedulesUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.AvailabilitySchedule)
  resource: shared.AvailabilitySchedule;
}

export class GetUserAvailabilitySchedulesUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetUserAvailabilitySchedulesUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getUserAvailabilitySchedulesUuid200ApplicationJSONObject?: GetUserAvailabilitySchedulesUuid200ApplicationJSON;

  @SpeakeasyMetadata()
  getUserAvailabilitySchedulesUuid403ApplicationJSONObject?: GetUserAvailabilitySchedulesUuid403ApplicationJSON;
}