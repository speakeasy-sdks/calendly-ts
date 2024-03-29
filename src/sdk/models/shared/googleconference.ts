/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Indicates the current status of the Google conference
 */
export enum GoogleConferenceStatusEnum {
  Initiated = "initiated",
  Processing = "processing",
  Pushed = "pushed",
  Failed = "failed",
}

/**
 * The event location is a Google Meet or Hangouts conference
 */
export enum GoogleConferenceTypeEnum {
  GoogleConference = "google_conference",
}

/**
 * Details about an Event that will take place using a Google Meet / Hangout conference
 */
export class GoogleConference extends SpeakeasyBase {
  /**
   * Google conference meeting url
   */
  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  /**
   * Indicates the current status of the Google conference
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GoogleConferenceStatusEnum;

  /**
   * The event location is a Google Meet or Hangouts conference
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GoogleConferenceTypeEnum;
}
