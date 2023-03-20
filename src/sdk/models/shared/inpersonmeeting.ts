import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InPersonMeetingTypeEnum {
  Physical = "physical",
}

// InPersonMeeting
/**
 * Information about the physical (in-person) event location
 **/
export class InPersonMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InPersonMeetingTypeEnum;
}
