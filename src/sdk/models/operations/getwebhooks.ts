/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Filter the list by organization or user
 */
export enum GetWebhooksScopeEnum {
  Organization = "organization",
  User = "user",
}

export class GetWebhooksRequest extends SpeakeasyBase {
  /**
   * The number of rows to return
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  /**
   * Indicates if the results should be filtered by organization
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=organization",
  })
  organization: string;

  /**
   * The token to pass to get the next or previous portion of the collection
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_token",
  })
  pageToken?: string;

  /**
   * Filter the list by organization or user
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: GetWebhooksScopeEnum;

  /**
   * Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values.
   *
   * @remarks
   * Supported fields are: created_at.
   * Sort direction is specified as: asc, desc.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  /**
   * Indicates if the results should be filtered by user. This parameter is only required if the `scope` parameter is set to `user`.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export enum GetWebhooks403ApplicationJSONMessageEnum {
  YouDoNotHavePermission = "You do not have permission",
  YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
  Unauthorized = "Unauthorized",
}

export enum GetWebhooks403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class GetWebhooks403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetWebhooks403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetWebhooks403ApplicationJSONTitleEnum;
}

export class GetWebhooksErrorResponseDetails extends SpeakeasyBase {
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
export class GetWebhooksErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetWebhooksErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetWebhooksErrorResponseDetails)
  details?: GetWebhooksErrorResponseDetails[];

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
export class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.WebhookSubscription })
  @Expose({ name: "collection" })
  @Type(() => shared.WebhookSubscription)
  collection: shared.WebhookSubscription[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetWebhooksErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  getWebhooks403ApplicationJSONObject?: GetWebhooks403ApplicationJSON;
}
