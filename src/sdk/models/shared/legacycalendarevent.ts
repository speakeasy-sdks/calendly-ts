/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Indicates the calendar provider the event belongs to.
 */
export enum LegacyCalendarEventKindEnum {
  Exchange = "exchange",
  Google = "google",
  Icloud = "icloud",
  Outlook = "outlook",
  OutlookDesktop = "outlook_desktop",
}

/**
 * Information about the calendar event from the calendar provider.
 */
export class LegacyCalendarEvent extends SpeakeasyBase {
  /**
   * the id provided from the calendar provider for this calendar event.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_id" })
  externalId: string;

  /**
   * Indicates the calendar provider the event belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind: LegacyCalendarEventKindEnum;
}
