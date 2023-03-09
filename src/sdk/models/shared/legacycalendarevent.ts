import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum LegacyCalendarEventKindEnum {
    Exchange = "exchange",
    Google = "google",
    Icloud = "icloud",
    Outlook = "outlook",
    OutlookDesktop = "outlook_desktop"
}

// LegacyCalendarEvent
/** 
 * Information about the calendar event from the calendar provider.
**/
export class LegacyCalendarEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_id" })
  externalId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind: LegacyCalendarEventKindEnum;
}