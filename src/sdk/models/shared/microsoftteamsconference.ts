import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class MicrosoftTeamsConferenceDataAudioConferencing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "conferenceId" })
  conferenceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dialinUrl" })
  dialinUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tollNumber" })
  tollNumber?: string;
}

// MicrosoftTeamsConferenceData
/** 
 * The conference metadata supplied by Microsoft Teams
**/
export class MicrosoftTeamsConferenceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "audioConferencing" })
  @Type(() => MicrosoftTeamsConferenceDataAudioConferencing)
  audioConferencing?: MicrosoftTeamsConferenceDataAudioConferencing;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum MicrosoftTeamsConferenceStatusEnum {
    Initiated = "initiated",
    Processing = "processing",
    Pushed = "pushed",
    Failed = "failed"
}
export enum MicrosoftTeamsConferenceTypeEnum {
    MicrosoftTeamsConference = "microsoft_teams_conference"
}

// MicrosoftTeamsConference
/** 
 * Meeting will take place in a Microsoft Teams conference
**/
export class MicrosoftTeamsConference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => MicrosoftTeamsConferenceData)
  data: MicrosoftTeamsConferenceData;

  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: MicrosoftTeamsConferenceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: MicrosoftTeamsConferenceTypeEnum;
}