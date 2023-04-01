/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Indicates if the invitee "canceled" or still "active"
 */
export enum GetInviteesStatusEnum {
  Active = "active",
  Canceled = "canceled",
}

export class GetInviteesRequest extends SpeakeasyBase {
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
   * The token to pass to get the next or previous portion of the collection
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_token",
  })
  pageToken?: string;

  /**
   * Order results by the **created_at** field and direction specified: ascending ("asc") or descending ("desc")
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  /**
   * Indicates if the invitee "canceled" or still "active"
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetInviteesStatusEnum;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export enum GetInvitees403ApplicationJSONMessageEnum {
  YouAreNotAllowedToViewThisEvent = "You are not allowed to view this event",
}

export enum GetInvitees403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Permission Denied
 */
export class GetInvitees403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetInvitees403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetInvitees403ApplicationJSONTitleEnum;
}

export class GetInviteesErrorResponseDetails extends SpeakeasyBase {
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
export class GetInviteesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetInviteesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetInviteesErrorResponseDetails)
  details?: GetInviteesErrorResponseDetails[];

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
export class GetInvitees200ApplicationJSON extends SpeakeasyBase {
  /**
   * The set of event invitees matching the criteria
   */
  @SpeakeasyMetadata({ elemType: shared.Invitee })
  @Expose({ name: "collection" })
  @Type(() => shared.Invitee)
  collection: shared.Invitee[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetInviteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetInviteesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getInvitees200ApplicationJSONObject?: GetInvitees200ApplicationJSON;

  /**
   * Permission Denied
   */
  @SpeakeasyMetadata()
  getInvitees403ApplicationJSONObject?: GetInvitees403ApplicationJSON;
}
