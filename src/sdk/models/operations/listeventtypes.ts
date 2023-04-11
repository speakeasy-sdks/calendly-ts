/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListEventTypesRequest extends SpeakeasyBase {
  /**
   * Return only active event types if true, only inactive if false, or all event types if this parameter is omitted.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=active",
  })
  active?: boolean;

  /**
   * Return only admin managed event types if true, exclude admin managed event types if false, or include all event types if this parameter is omitted.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=admin_managed",
  })
  adminManaged?: boolean;

  /**
   * The number of rows to return
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  /**
   * View available personal, team, and organization event types associated with the organization's URI.
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
   * Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values.
   *
   * @remarks
   * Supported fields are: name.
   * Sort direction is specified as: asc, desc.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  /**
   * View available personal, team, and organization event types associated with the user's URI.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export enum ListEventTypes403ApplicationJSONMessageEnum {
  ThisUserIsNotInYourOrganization = "This user is not in your organization",
  YouDoNotHavePermission = "You do not have permission",
  YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
}

export enum ListEventTypes403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class ListEventTypes403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: ListEventTypes403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: ListEventTypes403ApplicationJSONTitleEnum;
}

export class ListEventTypesErrorResponseDetails extends SpeakeasyBase {
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
export class ListEventTypesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListEventTypesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => ListEventTypesErrorResponseDetails)
  details?: ListEventTypesErrorResponseDetails[];

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
export class ListEventTypes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.EventType })
  @Expose({ name: "collection" })
  @Type(() => shared.EventType)
  collection: shared.EventType[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class ListEventTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: ListEventTypesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  listEventTypes200ApplicationJSONObject?: ListEventTypes200ApplicationJSON;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  listEventTypes403ApplicationJSONObject?: ListEventTypes403ApplicationJSON;
}