/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RevokeUsersOrganizationInvitationPathParams extends SpeakeasyBase {
  /**
   * The organization’s unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=org_uuid",
  })
  orgUuid: string;

  /**
   * The organization invitation's unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class RevokeUsersOrganizationInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeUsersOrganizationInvitationPathParams;
}

export enum RevokeUsersOrganizationInvitation403ApplicationJSONMessageEnum {
  YouCannotPerformThisActionForAnOrganizationWithSCIMEnabled = "You cannot perform this action for an organization with SCIM enabled.",
  YouDoNotHavePermission = "You do not have permission",
  YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
}

export enum RevokeUsersOrganizationInvitation403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class RevokeUsersOrganizationInvitation403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: RevokeUsersOrganizationInvitation403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: RevokeUsersOrganizationInvitation403ApplicationJSONTitleEnum;
}

export class RevokeUsersOrganizationInvitationErrorResponseDetails extends SpeakeasyBase {
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
export class RevokeUsersOrganizationInvitationErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: RevokeUsersOrganizationInvitationErrorResponseDetails,
  })
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

export class RevokeUsersOrganizationInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Cannot authenticate caller
   */
  @SpeakeasyMetadata()
  errorResponse1?: RevokeUsersOrganizationInvitationErrorResponse;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  revokeUsersOrganizationInvitation403ApplicationJSONObject?: RevokeUsersOrganizationInvitation403ApplicationJSON;
}
