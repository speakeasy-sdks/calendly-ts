import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum QuestionTypeEnum {
  Name = "name",
  Text = "text",
  Email = "email",
  Phone = "phone",
  Textarea = "textarea",
  Select = "select",
  Radios = "radios",
}

// Question
/**
 * Routing form questions.
 **/
export class Question extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answer_choices" })
  answerChoices: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: QuestionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}
