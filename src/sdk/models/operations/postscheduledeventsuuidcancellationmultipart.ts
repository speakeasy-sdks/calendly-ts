import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostScheduledEventsUuidCancellationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class PostScheduledEventsUuidCancellationMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostScheduledEventsUuidCancellationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: Record<string, any>;
}

export class PostScheduledEventsUuidCancellationMultipartErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostScheduledEventsUuidCancellationMultipartErrorResponse
/** 
 * Error Object
**/
export class PostScheduledEventsUuidCancellationMultipartErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostScheduledEventsUuidCancellationMultipartErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostScheduledEventsUuidCancellationMultipartErrorResponseDetails)
  details?: PostScheduledEventsUuidCancellationMultipartErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum PostScheduledEventsUuidCancellationMultipart403ApplicationJSONMessageEnum {
    YouAreNotAllowedToCancelThisEvent = "You are not allowed to cancel this event",
    EventInThePast = "Event in the past",
    EventIsAlreadyCanceled = "Event is already canceled"
}
export enum PostScheduledEventsUuidCancellationMultipart403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class PostScheduledEventsUuidCancellationMultipart403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: PostScheduledEventsUuidCancellationMultipart403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PostScheduledEventsUuidCancellationMultipart403ApplicationJSONTitleEnum;
}

export class PostScheduledEventsUuidCancellationMultipart201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Cancellation)
  resource: shared.Cancellation;
}

export class PostScheduledEventsUuidCancellationMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostScheduledEventsUuidCancellationMultipartErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationMultipart201ApplicationJSONObject?: PostScheduledEventsUuidCancellationMultipart201ApplicationJSON;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationMultipart403ApplicationJSONObject?: PostScheduledEventsUuidCancellationMultipart403ApplicationJSON;
}