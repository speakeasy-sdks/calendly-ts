import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class DeleteOrganizationsUuidMembershipsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class DeleteOrganizationsUuidMembershipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class DeleteOrganizationsUuidMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrganizationsUuidMembershipsPathParams;

  @SpeakeasyMetadata()
  security: DeleteOrganizationsUuidMembershipsSecurity;
}

export class DeleteOrganizationsUuidMembershipsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// DeleteOrganizationsUuidMembershipsErrorResponse
/** 
 * Error Object
**/
export class DeleteOrganizationsUuidMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteOrganizationsUuidMembershipsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => DeleteOrganizationsUuidMembershipsErrorResponseDetails)
  details?: DeleteOrganizationsUuidMembershipsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class DeleteOrganizationsUuidMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: DeleteOrganizationsUuidMembershipsErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}