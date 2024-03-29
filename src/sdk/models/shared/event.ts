/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Cancellation } from "./cancellation";
import { Guest } from "./guest";
import { LegacyCalendarEvent } from "./legacycalendarevent";
import { Expose, Transform, Type } from "class-transformer";

export class EventEventMemberships extends SpeakeasyBase {
  /**
   * Canonical reference (unique identifier) for the user
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user: string;
}

export class EventInviteesCounter extends SpeakeasyBase {
  /**
   * Total invitees for an event that have not canceled
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active: number;

  /**
   * Maximum number of active invitees that can book the event
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;

  /**
   * Total invitees for an event, including invitees that have canceled
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}

/**
 * Indicates if the event is "active" or "canceled"
 */
export enum EventStatusEnum {
  Active = "active",
  Canceled = "canceled",
}

/**
 * Information about a scheduled meeting
 */
export class Event extends SpeakeasyBase {
  /**
   * Information about the calendar event from the calendar provider.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "calendar_event" })
  @Type(() => LegacyCalendarEvent)
  calendarEvent: LegacyCalendarEvent;

  /**
   * Provides data pertaining to the cancellation of the Event
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cancellation" })
  @Type(() => Cancellation)
  cancellation?: Cancellation;

  /**
   * The moment when the event was created (e.g. "2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The moment the event was scheduled to end in UTC time (e.g. "2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endTime: Date;

  /**
   * Additional people added to an event by an invitee
   */
  @SpeakeasyMetadata({ elemType: Guest })
  @Expose({ name: "event_guests" })
  @Type(() => Guest)
  eventGuests: Guest[];

  /**
   * Event membership list
   */
  @SpeakeasyMetadata({ elemType: EventEventMemberships })
  @Expose({ name: "event_memberships" })
  @Type(() => EventEventMemberships)
  eventMemberships: EventEventMemberships[];

  /**
   * The event type associated with this event
   */
  @SpeakeasyMetadata()
  @Expose({ name: "event_type" })
  eventType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invitees_counter" })
  @Type(() => EventInviteesCounter)
  inviteesCounter: EventInviteesCounter;

  /**
   * The polymorphic base type for an event location that Calendly supports
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: any;

  /**
   * The event name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The moment the event was scheduled to start in UTC time (e.g. "2020-01-02T03:04:05.678123Z").
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime: Date;

  /**
   * Indicates if the event is "active" or "canceled"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: EventStatusEnum;

  /**
   * The moment when the event was last updated (e.g. "2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  /**
   * Canonical reference (unique identifier) for the resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
