/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class PostSharesRequestBodyAvailabilityRuleRulesIntervals extends SpeakeasyBase {
  /**
   * Format: `"hh:mm"`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: string;

  /**
   * Format: `"hh:mm"`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: string;
}

export enum PostSharesRequestBodyAvailabilityRuleRulesTypeEnum {
  Wday = "wday",
  Date = "date",
}

/**
 * is required when `type` is 'wday'
 */
export enum PostSharesRequestBodyAvailabilityRuleRulesWdayEnum {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

export class PostSharesRequestBodyAvailabilityRuleRules extends SpeakeasyBase {
  /**
   * is required when `type` is 'date'
   *
   * @remarks
   * Format: `YYYY-MM-DD`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata({
    elemType: PostSharesRequestBodyAvailabilityRuleRulesIntervals,
  })
  @Expose({ name: "intervals" })
  @Type(() => PostSharesRequestBodyAvailabilityRuleRulesIntervals)
  intervals?: PostSharesRequestBodyAvailabilityRuleRulesIntervals[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostSharesRequestBodyAvailabilityRuleRulesTypeEnum;

  /**
   * is required when `type` is 'wday'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "wday" })
  wday?: PostSharesRequestBodyAvailabilityRuleRulesWdayEnum;
}

export class PostSharesRequestBodyAvailabilityRule extends SpeakeasyBase {
  /**
   * are required when an availability rule is provided
   */
  @SpeakeasyMetadata({ elemType: PostSharesRequestBodyAvailabilityRuleRules })
  @Expose({ name: "rules" })
  @Type(() => PostSharesRequestBodyAvailabilityRuleRules)
  rules?: PostSharesRequestBodyAvailabilityRuleRules[];

  /**
   * is required when an availability rule is provided
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;
}

export enum PostSharesRequestBodyLocationConfigurationsKindEnum {
  Physical = "physical",
  AskInvitee = "ask_invitee",
  Custom = "custom",
  OutboundCall = "outbound_call",
  InboundCall = "inbound_call",
  GoogleConference = "google_conference",
  GotomeetingConference = "gotomeeting_conference",
  MicrosoftTeamsConference = "microsoft_teams_conference",
  WebexConference = "webex_conference",
  ZoomConference = "zoom_conference",
}

export class PostSharesRequestBodyLocationConfigurations extends SpeakeasyBase {
  /**
   * is only supported when `kind` is 'physical' or 'inbound_call'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additional_info" })
  additionalInfo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: PostSharesRequestBodyLocationConfigurationsKindEnum;

  /**
   * is only supported when `kind` is 'physical', 'custom' or 'ask_invitee'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location?: string;

  /**
   * is required when `kind` is 'inbound_call'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  position?: number;
}

export enum PostSharesRequestBodyPeriodTypeEnum {
  AvailableMoving = "available_moving",
  Moving = "moving",
  Fixed = "fixed",
  Unlimited = "unlimited",
}

export class PostSharesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "availability_rule" })
  @Type(() => PostSharesRequestBodyAvailabilityRule)
  availabilityRule?: PostSharesRequestBodyAvailabilityRule;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  /**
   * is required when `period_type` is 'fixed'
   *
   * @remarks
   * Format: `YYYY-MM-DD`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "event_type" })
  eventType: string;

  /**
   * determines if a location is hidden until invitee books a spot, only respected when there is a single custom location configured
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hide_location" })
  hideLocation?: boolean;

  @SpeakeasyMetadata({ elemType: PostSharesRequestBodyLocationConfigurations })
  @Expose({ name: "location_configurations" })
  @Type(() => PostSharesRequestBodyLocationConfigurations)
  locationConfigurations?: PostSharesRequestBodyLocationConfigurations[];

  /**
   * is required when `period_type` is 'moving' or 'available_moving'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "max_booking_time" })
  maxBookingTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "period_type" })
  periodType?: PostSharesRequestBodyPeriodTypeEnum;

  /**
   * is required when `period_type` is 'fixed'
   *
   * @remarks
   * Format: `YYYY-MM-DD`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class PostSharesErrorResponseDetails extends SpeakeasyBase {
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
export class PostSharesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostSharesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostSharesErrorResponseDetails)
  details?: PostSharesErrorResponseDetails[];

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
export class PostShares201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Share)
  resource: shared.Share;
}

export class PostSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: PostSharesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Created
   */
  @SpeakeasyMetadata()
  postShares201ApplicationJSONObject?: PostShares201ApplicationJSON;
}
