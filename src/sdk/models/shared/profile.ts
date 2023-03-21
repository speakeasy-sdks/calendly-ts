import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ProfileTypeEnum {
  User = "User",
  Team = "Team",
}

// Profile
/**
 * The publicly visible profile of a User or a Team that's associated with the Event Type (note: some Event Types don't have profiles)
 **/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ProfileTypeEnum;
}
