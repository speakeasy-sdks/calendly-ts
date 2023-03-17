import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventTypeCustomQuestion } from "./eventtypecustomquestion";
import { Profile } from "./profile";
import { Expose, Transform, Type } from "class-transformer";

export enum EventTypeBookingMethodEnum {
  Instant = "instant",
  Poll = "poll",
}
export enum EventTypeKindEnum {
  Solo = "solo",
  Group = "group",
}
export enum EventTypeKindDescriptionEnum {
  Collective = "Collective",
  Group = "Group",
  OneOnOne = "One-on-One",
  RoundRobin = "Round Robin",
}
export enum EventTypePoolingTypeEnum {
  RoundRobin = "round_robin",
  Collective = "collective",
}
export enum EventTypeTypeEnum {
  StandardEventType = "StandardEventType",
  AdhocEventType = "AdhocEventType",
}

// EventType
/**
 * A configuration for an Event
 **/
export class EventType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "admin_managed" })
  adminManaged: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "booking_method" })
  bookingMethod: EventTypeBookingMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "color" })
  color: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: EventTypeCustomQuestion })
  @Expose({ name: "custom_questions" })
  @Type(() => EventTypeCustomQuestion)
  customQuestions: EventTypeCustomQuestion[];

  @SpeakeasyMetadata()
  @Expose({ name: "deleted_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deletedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description_html" })
  descriptionHtml: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description_plain" })
  descriptionPlain: string;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "internal_note" })
  internalNote: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind: EventTypeKindEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "kind_description" })
  kindDescription: EventTypeKindDescriptionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pooling_type" })
  poolingType: EventTypePoolingTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "profile" })
  @Type(() => Profile)
  profile: Profile;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduling_url" })
  schedulingUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: EventTypeTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
