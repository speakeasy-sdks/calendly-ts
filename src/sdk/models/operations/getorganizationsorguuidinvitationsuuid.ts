/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetOrganizationsOrgUuidInvitationsUuidRequest extends SpeakeasyBase {
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

export class GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails extends SpeakeasyBase {
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
export class GetOrganizationsOrgUuidInvitationsUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetOrganizationsOrgUuidInvitationsUuidErrorResponseDetails,
  })
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

/**
 * OK
 */
export class GetOrganizationsOrgUuidInvitationsUuid200ApplicationJSON extends SpeakeasyBase {
  /**
   * Organization Invitation object
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.OrganizationInvitation)
  resource: shared.OrganizationInvitation;
}

export class GetOrganizationsOrgUuidInvitationsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationsOrgUuidInvitationsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getOrganizationsOrgUuidInvitationsUuid200ApplicationJSONObject?: GetOrganizationsOrgUuidInvitationsUuid200ApplicationJSON;
}
