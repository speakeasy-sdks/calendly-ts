import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CancellationCancelerTypeEnum {
    Host = "host",
    Invitee = "invitee"
}

// Cancellation
/** 
 * Provides data pertaining to the cancellation of the Event
**/
export class Cancellation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canceled_by" })
  canceledBy: string;

  @SpeakeasyMetadata()
  @Expose({ name: "canceler_type" })
  cancelerType: CancellationCancelerTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason: string;
}