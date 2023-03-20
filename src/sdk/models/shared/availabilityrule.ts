import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AvailabilityRuleIntervals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: string;
}
export enum AvailabilityRuleTypeEnum {
  Wday = "wday",
  Date = "date",
}
export enum AvailabilityRuleWdayEnum {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

// AvailabilityRule
/**
 * The rules for an availability schedule.
 **/
export class AvailabilityRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata({ elemType: AvailabilityRuleIntervals })
  @Expose({ name: "intervals" })
  @Type(() => AvailabilityRuleIntervals)
  intervals: AvailabilityRuleIntervals[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: AvailabilityRuleTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "wday" })
  wday?: AvailabilityRuleWdayEnum;
}
