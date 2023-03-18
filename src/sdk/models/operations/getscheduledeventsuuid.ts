import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetScheduledEventsUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class GetScheduledEventsUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledEventsUuidPathParams;
}
export enum GetScheduledEventsUuid403ApplicationJSONMessageEnum {
  YouAreNotAllowedToViewThisEvent = "You are not allowed to view this event",
}
export enum GetScheduledEventsUuid403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

export class GetScheduledEventsUuid403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetScheduledEventsUuid403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetScheduledEventsUuid403ApplicationJSONTitleEnum;
}

export class GetScheduledEventsUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetScheduledEventsUuidErrorResponse
/**
 * Error Object
 **/
export class GetScheduledEventsUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetScheduledEventsUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetScheduledEventsUuidErrorResponseDetails)
  details?: GetScheduledEventsUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetScheduledEventsUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Event)
  resource: shared.Event;
}

export class GetScheduledEventsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetScheduledEventsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getScheduledEventsUuid200ApplicationJSONObject?: GetScheduledEventsUuid200ApplicationJSON;

  @SpeakeasyMetadata()
  getScheduledEventsUuid403ApplicationJSONObject?: GetScheduledEventsUuid403ApplicationJSON;
}
