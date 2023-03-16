import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum SubmissionCustomMessageResultTypeEnum {
  CustomMessage = "custom_message",
}

// SubmissionCustomMessageResultValue
/**
 * Contains an object with custom message headline and body.
 **/
export class SubmissionCustomMessageResultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "headline" })
  headline: string;
}

// SubmissionCustomMessageResult
/**
 * Information about the custom message Routing Form Submission result.
 **/
export class SubmissionCustomMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SubmissionCustomMessageResultTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  @Type(() => SubmissionCustomMessageResultValue)
  value: SubmissionCustomMessageResultValue;
}
