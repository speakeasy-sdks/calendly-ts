import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export enum ShareSchedulingLinksOwnerTypeEnum {
  EventType = "EventType",
}

export class ShareSchedulingLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "booking_url" })
  bookingUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_type" })
  ownerType?: ShareSchedulingLinksOwnerTypeEnum;
}

export class ShareShareOverrideAvailabilityRuleRulesIntervals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: string;
}
export enum ShareShareOverrideAvailabilityRuleRulesTypeEnum {
  Wday = "wday",
  Date = "date",
}
export enum ShareShareOverrideAvailabilityRuleRulesWdayEnum {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

export class ShareShareOverrideAvailabilityRuleRules extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata({
    elemType: ShareShareOverrideAvailabilityRuleRulesIntervals,
  })
  @Expose({ name: "intervals" })
  @Type(() => ShareShareOverrideAvailabilityRuleRulesIntervals)
  intervals?: ShareShareOverrideAvailabilityRuleRulesIntervals[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ShareShareOverrideAvailabilityRuleRulesTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "wday" })
  wday?: ShareShareOverrideAvailabilityRuleRulesWdayEnum;
}

export class ShareShareOverrideAvailabilityRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ShareShareOverrideAvailabilityRuleRules })
  @Expose({ name: "rules" })
  @Type(() => ShareShareOverrideAvailabilityRuleRules)
  rules: ShareShareOverrideAvailabilityRuleRules[];

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;
}
export enum ShareShareOverrideLocationConfigurationsKindEnum {
  Physical = "physical",
  AskInvitee = "ask_invitee",
  Custom = "custom",
  OutboundCall = "outbound_call",
  InboundCall = "inbound_call",
  GoogleConference = "google_conference",
  GotomeetingConference = "gotomeeting_conference",
  MicrosoftTeamsConference = "microsoft_teams_conference",
  ZoomConference = "zoom_conference",
}

export class ShareShareOverrideLocationConfigurations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additional_info" })
  additionalInfo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: ShareShareOverrideLocationConfigurationsKindEnum;

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
export enum ShareShareOverridePeriodTypeEnum {
  AvailableMoving = "available_moving",
  Moving = "moving",
  Fixed = "fixed",
  Unlimited = "unlimited",
}

export class ShareShareOverride extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "availability_rule" })
  @Type(() => ShareShareOverrideAvailabilityRule)
  availabilityRule?: ShareShareOverrideAvailabilityRule;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "hide_location" })
  hideLocation?: boolean;

  @SpeakeasyMetadata({ elemType: ShareShareOverrideLocationConfigurations })
  @Expose({ name: "location_configurations" })
  @Type(() => ShareShareOverrideLocationConfigurations)
  locationConfigurations?: ShareShareOverrideLocationConfigurations[];

  @SpeakeasyMetadata()
  @Expose({ name: "max_booking_time" })
  maxBookingTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "period_type" })
  periodType?: ShareShareOverridePeriodTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class Share extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ShareSchedulingLinks })
  @Expose({ name: "scheduling_links" })
  @Type(() => ShareSchedulingLinks)
  schedulingLinks: ShareSchedulingLinks[];

  @SpeakeasyMetadata()
  @Expose({ name: "share_override" })
  @Type(() => ShareShareOverride)
  shareOverride: ShareShareOverride;
}
