import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetUserAvailabilitySchedulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetUserAvailabilitySchedulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export class GetUserAvailabilitySchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserAvailabilitySchedulesQueryParams;

  @SpeakeasyMetadata()
  security: GetUserAvailabilitySchedulesSecurity;
}

export class GetUserAvailabilitySchedulesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetUserAvailabilitySchedulesErrorResponse
/** 
 * Error Object
**/
export class GetUserAvailabilitySchedulesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetUserAvailabilitySchedulesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetUserAvailabilitySchedulesErrorResponseDetails)
  details?: GetUserAvailabilitySchedulesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum GetUserAvailabilitySchedules403ApplicationJSONMessageEnum {
    ThisUserIsNotInYourOrganization = "This user is not in your organization"
}
export enum GetUserAvailabilitySchedules403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class GetUserAvailabilitySchedules403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetUserAvailabilitySchedules403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetUserAvailabilitySchedules403ApplicationJSONTitleEnum;
}

export class GetUserAvailabilitySchedules200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AvailabilitySchedule })
  @Expose({ name: "collection" })
  @Type(() => shared.AvailabilitySchedule)
  collection: shared.AvailabilitySchedule[];
}

export class GetUserAvailabilitySchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetUserAvailabilitySchedulesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getUserAvailabilitySchedules200ApplicationJSONObject?: GetUserAvailabilitySchedules200ApplicationJSON;

  @SpeakeasyMetadata()
  getUserAvailabilitySchedules403ApplicationJSONObject?: GetUserAvailabilitySchedules403ApplicationJSON;
}