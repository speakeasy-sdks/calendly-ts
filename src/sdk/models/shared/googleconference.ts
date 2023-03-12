import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum GoogleConferenceStatusEnum {
    Initiated = "initiated",
    Processing = "processing",
    Pushed = "pushed",
    Failed = "failed"
}
export enum GoogleConferenceTypeEnum {
    GoogleConference = "google_conference"
}

// GoogleConference
/** 
 * Details about an Event that will take place using a Google Meet / Hangout conference
**/
export class GoogleConference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GoogleConferenceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GoogleConferenceTypeEnum;
}