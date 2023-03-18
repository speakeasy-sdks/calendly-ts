import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EventTypeCustomQuestionTypeEnum {
  String = "string",
  Text = "text",
  PhoneNumber = "phone_number",
  SingleSelect = "single_select",
  MultiSelect = "multi_select",
}

export class EventTypeCustomQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answer_choices" })
  answerChoices: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "include_other" })
  includeOther: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  position: number;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: EventTypeCustomQuestionTypeEnum;
}
