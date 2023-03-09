import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class RevokeUsersOrganizationInvitationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class RevokeUsersOrganizationInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_uuid" })
  orgUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class RevokeUsersOrganizationInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeUsersOrganizationInvitationPathParams;

  @SpeakeasyMetadata()
  security: RevokeUsersOrganizationInvitationSecurity;
}

export class RevokeUsersOrganizationInvitationErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// RevokeUsersOrganizationInvitationErrorResponse
/** 
 * Error Object
**/
export class RevokeUsersOrganizationInvitationErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RevokeUsersOrganizationInvitationErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => RevokeUsersOrganizationInvitationErrorResponseDetails)
  details?: RevokeUsersOrganizationInvitationErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum RevokeUsersOrganizationInvitation403ApplicationJSONMessageEnum {
    YouCannotPerformThisActionForAnOrganizationWithSCIMEnabled = "You cannot perform this action for an organization with SCIM enabled.",
    YouDoNotHavePermission = "You do not have permission",
    YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource."
}
export enum RevokeUsersOrganizationInvitation403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class RevokeUsersOrganizationInvitation403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: RevokeUsersOrganizationInvitation403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: RevokeUsersOrganizationInvitation403ApplicationJSONTitleEnum;
}

export class RevokeUsersOrganizationInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse1?: RevokeUsersOrganizationInvitationErrorResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  revokeUsersOrganizationInvitation403ApplicationJSONObject?: RevokeUsersOrganizationInvitation403ApplicationJSON;
}