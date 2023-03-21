import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

// GotoMeetingConferenceData
/**
 * The conference metadata supplied by GoToMeeting
 **/
export class GotoMeetingConferenceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "conferenceCallInfo" })
  conferenceCallInfo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uniqueMeetingId" })
  uniqueMeetingId?: number;
}
export enum GotoMeetingConferenceStatusEnum {
  Initiated = "initiated",
  Processing = "processing",
  Pushed = "pushed",
  Failed = "failed",
}
export enum GotoMeetingConferenceTypeEnum {
  Gotomeeting = "gotomeeting",
}

// GotoMeetingConference
/**
 * Details about an Event that will take place using a GotoMeeting conference
 **/
export class GotoMeetingConference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => GotoMeetingConferenceData)
  data: GotoMeetingConferenceData;

  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GotoMeetingConferenceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GotoMeetingConferenceTypeEnum;
}
