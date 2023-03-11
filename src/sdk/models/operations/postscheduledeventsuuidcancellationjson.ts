import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostScheduledEventsUuidCancellationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class PostScheduledEventsUuidCancellationApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}

export class PostScheduledEventsUuidCancellationJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostScheduledEventsUuidCancellationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostScheduledEventsUuidCancellationApplicationJSON;
}

export class PostScheduledEventsUuidCancellationJsonErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostScheduledEventsUuidCancellationJsonErrorResponse
/** 
 * Error Object
**/
export class PostScheduledEventsUuidCancellationJsonErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostScheduledEventsUuidCancellationJsonErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostScheduledEventsUuidCancellationJsonErrorResponseDetails)
  details?: PostScheduledEventsUuidCancellationJsonErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum PostScheduledEventsUuidCancellationJson403ApplicationJSONMessageEnum {
    YouAreNotAllowedToCancelThisEvent = "You are not allowed to cancel this event",
    EventInThePast = "Event in the past",
    EventIsAlreadyCanceled = "Event is already canceled"
}
export enum PostScheduledEventsUuidCancellationJson403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class PostScheduledEventsUuidCancellationJson403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: PostScheduledEventsUuidCancellationJson403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PostScheduledEventsUuidCancellationJson403ApplicationJSONTitleEnum;
}

export class PostScheduledEventsUuidCancellationJson201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Cancellation)
  resource: shared.Cancellation;
}

export class PostScheduledEventsUuidCancellationJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostScheduledEventsUuidCancellationJsonErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationJSON201ApplicationJSONObject?: PostScheduledEventsUuidCancellationJson201ApplicationJSON;

  @SpeakeasyMetadata()
  postScheduledEventsUuidCancellationJSON403ApplicationJSONObject?: PostScheduledEventsUuidCancellationJson403ApplicationJSON;
}