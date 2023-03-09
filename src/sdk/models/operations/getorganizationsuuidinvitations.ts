import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetOrganizationsUuidInvitationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetOrganizationsUuidInvitationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}
export enum GetOrganizationsUuidInvitationsStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Declined = "declined"
}

export class GetOrganizationsUuidInvitationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetOrganizationsUuidInvitationsStatusEnum;
}

export class GetOrganizationsUuidInvitationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationsUuidInvitationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationsUuidInvitationsQueryParams;

  @SpeakeasyMetadata()
  security: GetOrganizationsUuidInvitationsSecurity;
}

export class GetOrganizationsUuidInvitationsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetOrganizationsUuidInvitationsErrorResponse
/** 
 * Error Object
**/
export class GetOrganizationsUuidInvitationsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetOrganizationsUuidInvitationsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetOrganizationsUuidInvitationsErrorResponseDetails)
  details?: GetOrganizationsUuidInvitationsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetOrganizationsUuidInvitations200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.OrganizationInvitation })
  @Expose({ name: "collection" })
  @Type(() => shared.OrganizationInvitation)
  collection: shared.OrganizationInvitation[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetOrganizationsUuidInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationsUuidInvitationsErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getOrganizationsUuidInvitations200ApplicationJSONObject?: GetOrganizationsUuidInvitations200ApplicationJSON;
}