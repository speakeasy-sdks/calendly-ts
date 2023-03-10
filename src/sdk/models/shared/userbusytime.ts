import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class UserBusyTimeEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
export enum UserBusyTimeTypeEnum {
    Calendly = "calendly",
    External = "external"
}

// UserBusyTime
/** 
 * An internal or external scheduled event for a given user
**/
export class UserBusyTime extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "buffered_end_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  bufferedEndTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "buffered_start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  bufferedStartTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "end_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  @Type(() => UserBusyTimeEvent)
  event?: UserBusyTimeEvent;

  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UserBusyTimeTypeEnum;
}