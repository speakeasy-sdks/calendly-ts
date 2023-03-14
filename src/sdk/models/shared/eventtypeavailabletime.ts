import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// EventTypeAvailableTime
/** 
 * An available meeting time slot for the given event type
**/
export class EventTypeAvailableTime extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invitees_remaining" })
  inviteesRemaining: number;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduling_url" })
  schedulingUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;
}