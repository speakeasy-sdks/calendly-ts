import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum SubmissionExternalUrlResultTypeEnum {
  ExternalUrl = "external_url",
}

// SubmissionExternalUrlResult
/**
 * Information about the external URL Routing Form Submission result.
 **/
export class SubmissionExternalUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SubmissionExternalUrlResultTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
