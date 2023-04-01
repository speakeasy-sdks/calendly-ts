/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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

/**
 * The conference metadata supplied by GoToMeeting
 */
export class WebExConferenceData extends SpeakeasyBase {
  /**
   * Canonical reference (unique identifier) for the WebEx conference
   */
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

/**
 * Indicates the current status of the WebEx conference
 */
export enum WebExConferenceStatusEnum {
  Initiated = "initiated",
  Processing = "processing",
  Pushed = "pushed",
  Failed = "failed",
}

/**
 * The event location is a WebEx conference
 */
export enum WebExConferenceTypeEnum {
  WebexConference = "webex_conference",
}

/**
 * Details about an Event that will take place using a WebEx conference
 */
export class WebExConference extends SpeakeasyBase {
  /**
   * The conference metadata supplied by GoToMeeting
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => WebExConferenceData)
  data: WebExConferenceData;

  /**
   * WebEx conference meeting url
   */
  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  /**
   * Indicates the current status of the WebEx conference
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: WebExConferenceStatusEnum;

  /**
   * The event location is a WebEx conference
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: WebExConferenceTypeEnum;
}
