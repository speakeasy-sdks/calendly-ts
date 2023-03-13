import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum SubmissionEventTypeResultTypeEnum {
    EventType = "event_type"
}

// SubmissionEventTypeResult
/** 
 * Information about the event type Routing Form Submission result.
**/
export class SubmissionEventTypeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SubmissionEventTypeResultTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}