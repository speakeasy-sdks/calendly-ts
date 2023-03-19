import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum OutboundCallTypeEnum {
  OutboundCall = "outbound_call",
}

// OutboundCall
/**
 * Meeting publisher will call the Invitee
 **/
export class OutboundCall extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: OutboundCallTypeEnum;
}
