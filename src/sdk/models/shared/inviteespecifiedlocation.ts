/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The event location selected by the invitee
 */
export enum InviteeSpecifiedLocationTypeEnum {
  AskInvitee = "ask_invitee",
}

/**
 * Information about an event location that’s specified by the invitee.
 */
export class InviteeSpecifiedLocation extends SpeakeasyBase {
  /**
   * The event location description provided by the invitee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  /**
   * The event location selected by the invitee
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InviteeSpecifiedLocationTypeEnum;
}
