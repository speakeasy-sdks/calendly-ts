/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetOrganizationsUuidMembershipsRequest extends SpeakeasyBase {
  /**
   * The organization membership's unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class GetOrganizationsUuidMembershipsErrorResponseDetails extends SpeakeasyBase {
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
export class GetOrganizationsUuidMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetOrganizationsUuidMembershipsErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => GetOrganizationsUuidMembershipsErrorResponseDetails)
  details?: GetOrganizationsUuidMembershipsErrorResponseDetails[];

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
export class GetOrganizationsUuidMemberships200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.OrganizationMembership)
  resource: shared.OrganizationMembership;
}

export class GetOrganizationsUuidMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationsUuidMembershipsErrorResponse;

  /**
   * Caller not authorized to perform this action
   */
  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getOrganizationsUuidMemberships200ApplicationJSONObject?: GetOrganizationsUuidMemberships200ApplicationJSON;
}
