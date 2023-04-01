/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The UTM and Salesforce tracking parameters associated with a Routing Form Submission.
 */
export class SubmissionTracking extends SpeakeasyBase {
  /**
   * The Salesforce record unique identifier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "salesforce_uuid" })
  salesforceUuid: string;

  /**
   * The UTM parameter used to track a campaign.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utm_campaign" })
  utmCampaign: string;

  /**
   * UTM content tracking parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utm_content" })
  utmContent: string;

  /**
   * The UTM parameter that identifies the type of input (e.g. Cost Per Click (CPC), social media, affiliate or QR code).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utm_medium" })
  utmMedium: string;

  /**
   * The UTM parameter that identifies the source (platform where the traffic originates).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utm_source" })
  utmSource: string;

  /**
   * The UTM parameter used to track keywords.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utm_term" })
  utmTerm: string;
}
