import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// SubmissionTracking
/** 
 * The UTM and Salesforce tracking parameters associated with a Routing Form Submission.
**/
export class SubmissionTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "salesforce_uuid" })
  salesforceUuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "utm_campaign" })
  utmCampaign: string;

  @SpeakeasyMetadata()
  @Expose({ name: "utm_content" })
  utmContent: string;

  @SpeakeasyMetadata()
  @Expose({ name: "utm_medium" })
  utmMedium: string;

  @SpeakeasyMetadata()
  @Expose({ name: "utm_source" })
  utmSource: string;

  @SpeakeasyMetadata()
  @Expose({ name: "utm_term" })
  utmTerm: string;
}