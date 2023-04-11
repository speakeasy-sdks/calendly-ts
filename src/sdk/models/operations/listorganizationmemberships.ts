/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListOrganizationMembershipsRequest extends SpeakeasyBase {
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

export class ListOrganizationMembershipsErrorResponseDetails extends SpeakeasyBase {
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
export class ListOrganizationMembershipsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListOrganizationMembershipsErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => ListOrganizationMembershipsErrorResponseDetails)
  details?: ListOrganizationMembershipsErrorResponseDetails[];

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
export class ListOrganizationMemberships200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.OrganizationMembership })
  @Expose({ name: "collection" })
  @Type(() => shared.OrganizationMembership)
  collection: shared.OrganizationMembership[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class ListOrganizationMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: ListOrganizationMembershipsErrorResponse;

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
  listOrganizationMemberships200ApplicationJSONObject?: ListOrganizationMemberships200ApplicationJSON;
}