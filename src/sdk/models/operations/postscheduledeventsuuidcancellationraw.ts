import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostScheduledEventsUuidCancellationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class PostScheduledEventsUuidCancellationRawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostScheduledEventsUuidCancellationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;
}
export enum PostScheduledEventsUuidCancellationRaw403ApplicationJSONMessageEnum {
  YouAreNotAllowedToCancelThisEvent = "You are not allowed to cancel this event",
  EventInThePast = "Event in the past",
  EventIsAlreadyCanceled = "Event is already canceled",
}
export enum PostScheduledEventsUuidCancellationRaw403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

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

// PostScheduledEventsUuidCancellationRawErrorResponse
/**
 * Error Object
 **/
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

export class PostScheduledEventsUuidCancellationRaw201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Cancellation)
  resource: shared.Cancellation;
}

export class PostScheduledEventsUuidCancellationRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostScheduledEventsUuidCancellationRawErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationRaw201ApplicationJSONObject?: PostScheduledEventsUuidCancellationRaw201ApplicationJSON;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationRaw403ApplicationJSONObject?: PostScheduledEventsUuidCancellationRaw403ApplicationJSON;
}
