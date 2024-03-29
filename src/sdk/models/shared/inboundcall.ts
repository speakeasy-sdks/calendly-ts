/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *
 *
 * @remarks
 * Indicates that the invitee will call the event host
 */
export enum InboundCallTypeEnum {
  InboundCall = "inbound_call",
}

/**
 * Invitee will call meeting publisher at the specified phone number
 */
export class InboundCall extends SpeakeasyBase {
  /**
   * The phone number the invitee will use to call the event host (publisher)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  /**
   *
   *
   * @remarks
   * Indicates that the invitee will call the event host
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InboundCallTypeEnum;
}
