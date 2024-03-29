/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The max number of events that can be scheduled using this scheduling link.
 */
export enum PostSchedulingLinksRequestBodyMaxEventCountEnum {
  One = "1",
}

/**
 * Resource type (currently, this is always EventType)
 */
export enum PostSchedulingLinksRequestBodyOwnerTypeEnum {
  EventType = "EventType",
}

export class PostSchedulingLinksRequestBody extends SpeakeasyBase {
  /**
   * The max number of events that can be scheduled using this scheduling link.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "max_event_count" })
  maxEventCount: PostSchedulingLinksRequestBodyMaxEventCountEnum;

  /**
   * A link to the resource that owns this Scheduling Link (currently, this is always an Event Type)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner: string;

  /**
   * Resource type (currently, this is always EventType)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType: PostSchedulingLinksRequestBodyOwnerTypeEnum;
}

export class PostSchedulingLinksErrorResponseDetails extends SpeakeasyBase {
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

/**
 * Resource type (currently, this is always EventType)
 */
export enum PostSchedulingLinks201ApplicationJSONResourceOwnerTypeEnum {
  EventType = "EventType",
}

export class PostSchedulingLinks201ApplicationJSONResource extends SpeakeasyBase {
  /**
   * Scheduling link url
   */
  @SpeakeasyMetadata()
  @Expose({ name: "booking_url" })
  bookingUrl: string;

  /**
   * A link to the resource that owns this Scheduling Link (currently, this is always an Event Type)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner?: string;

  /**
   * Resource type (currently, this is always EventType)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType?: PostSchedulingLinks201ApplicationJSONResourceOwnerTypeEnum;
}

/**
 * Created
 */
export class PostSchedulingLinks201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => PostSchedulingLinks201ApplicationJSONResource)
  resource: PostSchedulingLinks201ApplicationJSONResource;
}

export class PostSchedulingLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: PostSchedulingLinksErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Created
   */
  @SpeakeasyMetadata()
  postSchedulingLinks201ApplicationJSONObject?: PostSchedulingLinks201ApplicationJSON;
}
