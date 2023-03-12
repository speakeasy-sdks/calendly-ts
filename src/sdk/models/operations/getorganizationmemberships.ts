import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetOrganizationMembershipsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export class GetOrganizationMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrganizationMembershipsQueryParams;
}

export class GetOrganizationMembershipsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetOrganizationMembershipsErrorResponse
/** 
 * Error Object
**/
export class GetOrganizationMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetOrganizationMembershipsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetOrganizationMembershipsErrorResponseDetails)
  details?: GetOrganizationMembershipsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

// GetOrganizationMemberships200ApplicationJSON
/** 
 * Service response
**/
export class GetOrganizationMemberships200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.OrganizationMembership })
  @Expose({ name: "collection" })
  @Type(() => shared.OrganizationMembership)
  collection: shared.OrganizationMembership[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetOrganizationMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationMembershipsErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getOrganizationMemberships200ApplicationJSONObject?: GetOrganizationMemberships200ApplicationJSON;
}