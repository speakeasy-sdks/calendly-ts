import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// SubmissionQuestionAndAnswer
/** 
 * All Routing Form Submission questions with answers.
**/
export class SubmissionQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answer" })
  answer?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "question" })
  question: string;

  @SpeakeasyMetadata()
  @Expose({ name: "question_uuid" })
  questionUuid: string;
}