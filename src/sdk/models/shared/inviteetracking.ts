import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// InviteeTracking
/** 
 * The UTM and Salesforce tracking parameters associated with an Invitee
**/
export class InviteeTracking extends SpeakeasyBase {
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