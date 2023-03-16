import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AvailabilityRule } from "./availabilityrule";
import { Expose, Type } from "class-transformer";

// AvailabilitySchedule
/**
 * The availability schedule set by the user.
 **/
export class AvailabilitySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "default" })
  default: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata({ elemType: AvailabilityRule })
  @Expose({ name: "rules" })
  @Type(() => AvailabilityRule)
  rules: AvailabilityRule[];

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user: string;
}
