import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetOrganizationsOrgUuidInvitationsUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetOrganizationsOrgUuidInvitationsUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_uuid" })
  orgUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetOrganizationsOrgUuidInvitationsUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationsOrgUuidInvitationsUuidPathParams;

  @SpeakeasyMetadata()
  security: GetOrganizationsOrgUuidInvitationsUuidSecurity;
}

export class GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetOrganizationsOrgUuidInvitationsUuidErrorResponse
/** 
 * Error Object
**/
export class GetOrganizationsOrgUuidInvitationsUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails)
  details?: GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetOrganizationsOrgUuidInvitationsUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.OrganizationInvitation)
  resource: shared.OrganizationInvitation;
}

export class GetOrganizationsOrgUuidInvitationsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationsOrgUuidInvitationsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getOrganizationsOrgUuidInvitationsUuid200ApplicationJSONObject?: GetOrganizationsOrgUuidInvitationsUuid200ApplicationJSON;
}