import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CustomLocationTypeEnum {
    Custom = "custom"
}

// CustomLocation
/** 
 * Use this to describe an existing Calendly-supported event location.
**/
export class CustomLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CustomLocationTypeEnum;
}