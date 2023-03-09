import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetOrganizationsUuidMembershipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetOrganizationsUuidMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationsUuidMembershipsPathParams;
}

export class GetOrganizationsUuidMembershipsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetOrganizationsUuidMembershipsErrorResponse
/** 
 * Error Object
**/
export class GetOrganizationsUuidMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetOrganizationsUuidMembershipsErrorResponseDetails })
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

export class GetOrganizationsUuidMemberships200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.OrganizationMembership)
  resource: shared.OrganizationMembership;
}

export class GetOrganizationsUuidMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationsUuidMembershipsErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getOrganizationsUuidMemberships200ApplicationJSONObject?: GetOrganizationsUuidMemberships200ApplicationJSON;
}