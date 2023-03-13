import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InviteeSpecifiedLocationTypeEnum {
    AskInvitee = "ask_invitee"
}

// InviteeSpecifiedLocation
/** 
 * Information about an event location that’s specified by the invitee.
**/
export class InviteeSpecifiedLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InviteeSpecifiedLocationTypeEnum;
}