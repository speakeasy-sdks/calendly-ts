import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InboundCallTypeEnum {
  InboundCall = "inbound_call",
}

// InboundCall
/**
 * Invitee will call meeting publisher at the specified phone number
 **/
export class InboundCall extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InboundCallTypeEnum;
}
