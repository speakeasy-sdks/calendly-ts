/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostScheduledEventsUuidCancellationRawRequest extends SpeakeasyBase {
  /**
   * Optional cancellation reason.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  requestBody?: Uint8Array;

  /**
   * The event's unique indentifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export enum PostScheduledEventsUuidCancellationRaw403ApplicationJSONMessageEnum {
  YouAreNotAllowedToCancelThisEvent = "You are not allowed to cancel this event",
  EventInThePast = "Event in the past",
  EventIsAlreadyCanceled = "Event is already canceled",
}

export enum PostScheduledEventsUuidCancellationRaw403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

/**
 * Caller not authorized to perform this action
 */
export class PostScheduledEventsUuidCancellationRaw403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: PostScheduledEventsUuidCancellationRaw403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PostScheduledEventsUuidCancellationRaw403ApplicationJSONTitleEnum;
}

export class PostScheduledEventsUuidCancellationRawErrorResponseDetails extends SpeakeasyBase {
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
export class PostScheduledEventsUuidCancellationRawErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostScheduledEventsUuidCancellationRawErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => PostScheduledEventsUuidCancellationRawErrorResponseDetails)
  details?: PostScheduledEventsUuidCancellationRawErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

/**
 * Created
 */
export class PostScheduledEventsUuidCancellationRaw201ApplicationJSON extends SpeakeasyBase {
  /**
   * Provides data pertaining to the cancellation of the Event
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Cancellation)
  resource: shared.Cancellation;
}

export class PostScheduledEventsUuidCancellationRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: PostScheduledEventsUuidCancellationRawErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Created
   */
  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationRaw201ApplicationJSONObject?: PostScheduledEventsUuidCancellationRaw201ApplicationJSON;

  /**
   * Caller not authorized to perform this action
   */
  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationRaw403ApplicationJSONObject?: PostScheduledEventsUuidCancellationRaw403ApplicationJSON;
}
