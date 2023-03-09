import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostSharesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class PostSharesRequestBodyAvailabilityRuleRulesIntervals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: string;
}
export enum PostSharesRequestBodyAvailabilityRuleRulesTypeEnum {
    Wday = "wday",
    Date = "date"
}
export enum PostSharesRequestBodyAvailabilityRuleRulesWdayEnum {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}

export class PostSharesRequestBodyAvailabilityRuleRules extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata({ elemType: PostSharesRequestBodyAvailabilityRuleRulesIntervals })
  @Expose({ name: "intervals" })
  @Type(() => PostSharesRequestBodyAvailabilityRuleRulesIntervals)
  intervals?: PostSharesRequestBodyAvailabilityRuleRulesIntervals[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostSharesRequestBodyAvailabilityRuleRulesTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "wday" })
  wday?: PostSharesRequestBodyAvailabilityRuleRulesWdayEnum;
}

export class PostSharesRequestBodyAvailabilityRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostSharesRequestBodyAvailabilityRuleRules })
  @Expose({ name: "rules" })
  @Type(() => PostSharesRequestBodyAvailabilityRuleRules)
  rules?: PostSharesRequestBodyAvailabilityRuleRules[];

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
    ZoomConference = "zoom_conference"
}

export class PostSharesRequestBodyLocationConfigurations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additional_info" })
  additionalInfo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: PostSharesRequestBodyLocationConfigurationsKindEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location?: string;

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
    Unlimited = "unlimited"
}

export class PostSharesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "availability_rule" })
  @Type(() => PostSharesRequestBodyAvailabilityRule)
  availabilityRule?: PostSharesRequestBodyAvailabilityRule;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "event_type" })
  eventType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hide_location" })
  hideLocation?: boolean;

  @SpeakeasyMetadata({ elemType: PostSharesRequestBodyLocationConfigurations })
  @Expose({ name: "location_configurations" })
  @Type(() => PostSharesRequestBodyLocationConfigurations)
  locationConfigurations?: PostSharesRequestBodyLocationConfigurations[];

  @SpeakeasyMetadata()
  @Expose({ name: "max_booking_time" })
  maxBookingTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "period_type" })
  periodType?: PostSharesRequestBodyPeriodTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class PostSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostSharesRequestBody;

  @SpeakeasyMetadata()
  security: PostSharesSecurity;
}

export class PostSharesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostSharesErrorResponse
/** 
 * Error Object
**/
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

export class PostShares201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Share)
  resource: shared.Share;
}

export class PostSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostSharesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postShares201ApplicationJSONObject?: PostShares201ApplicationJSON;
}