import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// InviteeQuestionAndAnswer
/**
 * A response to a question on a booking page form
 **/
export class InviteeQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answer" })
  answer: string;

  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  position: number;

  @SpeakeasyMetadata()
  @Expose({ name: "question" })
  question: string;
}
