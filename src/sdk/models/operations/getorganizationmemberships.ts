/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetOrganizationMembershipsQueryParams extends SpeakeasyBase {
  /**
   * The number of rows to return
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  /**
   * Indicates if the results should be filtered by email address
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  /**
   * Indicates if the results should be filtered by organization
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=organization",
  })
  organization?: string;

  /**
   * The token to pass to get the next or previous portion of the collection
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_token",
  })
  pageToken?: string;

  /**
   * Indicates if the results should be filtered by user
   */
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

/**
 * Error Object
 */
export class GetOrganizationMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetOrganizationMembershipsErrorResponseDetails,
  })
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

/**
 * Service response
 */
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

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetOrganizationMembershipsErrorResponse;

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
  getOrganizationMemberships200ApplicationJSONObject?: GetOrganizationMemberships200ApplicationJSON;
}
