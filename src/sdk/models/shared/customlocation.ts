/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The event location doesn't fall into a standard category defined by the event host (publisher)
 */
export enum CustomLocationTypeEnum {
  Custom = "custom",
}

/**
 * Use this to describe an existing Calendly-supported event location.
 */
export class CustomLocation extends SpeakeasyBase {
  /**
   * The location description provided by the event host (publisher)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;

  /**
   * The event location doesn't fall into a standard category defined by the event host (publisher)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CustomLocationTypeEnum;
}
