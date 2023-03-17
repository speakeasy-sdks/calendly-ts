import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SubmissionQuestionAndAnswer } from "./submissionquestionandanswer";
import { SubmissionTracking } from "./submissiontracking";
import { Expose, Transform, Type } from "class-transformer";

export enum RoutingFormSubmissionSubmitterTypeEnum {
  Invitee = "Invitee",
}

// RoutingFormSubmission
/**
 * Information about a Routing Form Submission.
 **/
export class RoutingFormSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: SubmissionQuestionAndAnswer })
  @Expose({ name: "questions_and_answers" })
  @Type(() => SubmissionQuestionAndAnswer)
  questionsAndAnswers: SubmissionQuestionAndAnswer[];

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_form" })
  routingForm: string;

  @SpeakeasyMetadata()
  @Expose({ name: "submitter" })
  submitter: string;

  @SpeakeasyMetadata()
  @Expose({ name: "submitter_type" })
  submitterType: RoutingFormSubmissionSubmitterTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => SubmissionTracking)
  tracking: SubmissionTracking;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
