import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Question } from "./question";
import { Expose, Transform, Type } from "class-transformer";

export enum RoutingFormStatusEnum {
    Draft = "draft",
    Published = "published"
}

// RoutingForm
/** 
 * Information about a routing form.
**/
export class RoutingForm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata({ elemType: Question })
  @Expose({ name: "questions" })
  @Type(() => Question)
  questions: Question[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: RoutingFormStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}