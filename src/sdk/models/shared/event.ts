import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Cancellation } from "./cancellation";
import { Guest } from "./guest";
import { LegacyCalendarEvent } from "./legacycalendarevent";
import { Expose, Transform, Type } from "class-transformer";


export class EventEventMemberships extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user: string;
}

export class EventInviteesCounter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}
export enum EventStatusEnum {
    Active = "active",
    Canceled = "canceled"
}

// Event
/** 
 * Information about a scheduled meeting
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "calendar_event" })
  @Type(() => LegacyCalendarEvent)
  calendarEvent: LegacyCalendarEvent;

  @SpeakeasyMetadata()
  @Expose({ name: "cancellation" })
  @Type(() => Cancellation)
  cancellation?: Cancellation;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "end_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endTime: Date;

  @SpeakeasyMetadata({ elemType: Guest })
  @Expose({ name: "event_guests" })
  @Type(() => Guest)
  eventGuests: Guest[];

  @SpeakeasyMetadata({ elemType: EventEventMemberships })
  @Expose({ name: "event_memberships" })
  @Type(() => EventEventMemberships)
  eventMemberships: EventEventMemberships[];

  @SpeakeasyMetadata()
  @Expose({ name: "event_type" })
  eventType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invitees_counter" })
  @Type(() => EventInviteesCounter)
  inviteesCounter: EventInviteesCounter;

  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: any;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: EventStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}