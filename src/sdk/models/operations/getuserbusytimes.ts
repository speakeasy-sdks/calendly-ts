import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetUserBusyTimesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetUserBusyTimesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}

export class GetUserBusyTimesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserBusyTimesQueryParams;

  @SpeakeasyMetadata()
  security: GetUserBusyTimesSecurity;
}

export class GetUserBusyTimesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetUserBusyTimesErrorResponse
/** 
 * Error Object
**/
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
export enum GetUserBusyTimes403ApplicationJSONMessageEnum {
    ThisUserIsNotInYourOrganization = "This user is not in your organization"
}
export enum GetUserBusyTimes403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class GetUserBusyTimes403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetUserBusyTimes403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetUserBusyTimes403ApplicationJSONTitleEnum;
}

// GetUserBusyTimes200ApplicationJSON
/** 
 * Service Response
**/
export class GetUserBusyTimes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.UserBusyTime })
  @Expose({ name: "collection" })
  @Type(() => shared.UserBusyTime)
  collection: shared.UserBusyTime[];
}

export class GetUserBusyTimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetUserBusyTimesErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getUserBusyTimes200ApplicationJSONObject?: GetUserBusyTimes200ApplicationJSON;

  @SpeakeasyMetadata()
  getUserBusyTimes403ApplicationJSONObject?: GetUserBusyTimes403ApplicationJSON;
}