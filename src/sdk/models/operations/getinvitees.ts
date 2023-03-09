import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetInviteesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetInviteesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}
export enum GetInviteesStatusEnum {
    Active = "active",
    Canceled = "canceled"
}

export class GetInviteesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetInviteesStatusEnum;
}

export class GetInviteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInviteesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInviteesQueryParams;

  @SpeakeasyMetadata()
  security: GetInviteesSecurity;
}

export class GetInviteesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetInviteesErrorResponse
/** 
 * Error Object
**/
export class GetInviteesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetInviteesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetInviteesErrorResponseDetails)
  details?: GetInviteesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum GetInvitees403ApplicationJSONMessageEnum {
    YouAreNotAllowedToViewThisEvent = "You are not allowed to view this event"
}
export enum GetInvitees403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class GetInvitees403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetInvitees403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetInvitees403ApplicationJSONTitleEnum;
}

// GetInvitees200ApplicationJSON
/** 
 * Service response
**/
export class GetInvitees200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Invitee })
  @Expose({ name: "collection" })
  @Type(() => shared.Invitee)
  collection: shared.Invitee[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetInviteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetInviteesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getInvitees200ApplicationJSONObject?: GetInvitees200ApplicationJSON;

  @SpeakeasyMetadata()
  getInvitees403ApplicationJSONObject?: GetInvitees403ApplicationJSON;
}