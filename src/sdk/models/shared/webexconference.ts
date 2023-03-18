import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class WebExConferenceDataTelephonyCallInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "callInNumber" })
  callInNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tollType" })
  tollType: string;
}

export class WebExConferenceDataTelephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WebExConferenceDataTelephonyCallInNumbers })
  @Expose({ name: "callInNumbers" })
  @Type(() => WebExConferenceDataTelephonyCallInNumbers)
  callInNumbers: WebExConferenceDataTelephonyCallInNumbers[];
}

// WebExConferenceData
/**
 * The conference metadata supplied by GoToMeeting
 **/
export class WebExConferenceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "telephony" })
  @Type(() => WebExConferenceDataTelephony)
  telephony: WebExConferenceDataTelephony;
}
export enum WebExConferenceStatusEnum {
  Initiated = "initiated",
  Processing = "processing",
  Pushed = "pushed",
  Failed = "failed",
}
export enum WebExConferenceTypeEnum {
  WebexConference = "webex_conference",
}

// WebExConference
/**
 * Details about an Event that will take place using a WebEx conference
 **/
export class WebExConference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => WebExConferenceData)
  data: WebExConferenceData;

  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: WebExConferenceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: WebExConferenceTypeEnum;
}
