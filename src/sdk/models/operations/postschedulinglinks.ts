import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostSchedulingLinksRequestBodyOwnerTypeEnum {
  EventType = "EventType",
}

export class PostSchedulingLinksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max_event_count" })
  maxEventCount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType: PostSchedulingLinksRequestBodyOwnerTypeEnum;
}

export class PostSchedulingLinksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostSchedulingLinksRequestBody;
}

export class PostSchedulingLinksErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostSchedulingLinksErrorResponse
/**
 * Error Object
 **/
export class PostSchedulingLinksErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostSchedulingLinksErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostSchedulingLinksErrorResponseDetails)
  details?: PostSchedulingLinksErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum PostSchedulingLinks201ApplicationJSONResourceOwnerTypeEnum {
  EventType = "EventType",
}

export class PostSchedulingLinks201ApplicationJSONResource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "booking_url" })
  bookingUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType?: PostSchedulingLinks201ApplicationJSONResourceOwnerTypeEnum;
}

export class PostSchedulingLinks201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => PostSchedulingLinks201ApplicationJSONResource)
  resource: PostSchedulingLinks201ApplicationJSONResource;
}

export class PostSchedulingLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostSchedulingLinksErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postSchedulingLinks201ApplicationJSONObject?: PostSchedulingLinks201ApplicationJSON;
}
