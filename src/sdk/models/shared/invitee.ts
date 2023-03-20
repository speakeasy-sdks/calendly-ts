import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Cancellation } from "./cancellation";
import { InviteeQuestionAndAnswer } from "./inviteequestionandanswer";
import { InviteeTracking } from "./inviteetracking";
import { Expose, Transform, Type } from "class-transformer";

// InviteeNoShow1
/**
 * Provides data pertaining to the associated no show for the Invitee
 **/
export class InviteeNoShow1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
export enum InviteePaymentCurrencyEnum {
  Aud = "AUD",
  Cad = "CAD",
  Eur = "EUR",
  Gbp = "GBP",
  Usd = "USD",
}
export enum InviteePaymentProviderEnum {
  Stripe = "stripe",
  Paypal = "paypal",
}

// InviteePayment
/**
 * Invitee payment
 **/
export class InviteePayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: InviteePaymentCurrencyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "external_id" })
  externalId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: InviteePaymentProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "successful" })
  successful: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "terms" })
  terms: string;
}

// InviteeReconfirmation
/**
 * Assuming reconfirmation is enabled for the event type, when reconfirmation is requested this object is present with a `created_at` that reflects when the reconfirmation notification was sent. Once the invitee has reconfirmed the `confirmed_at` attribute will change from `null` to a timestamp that reflects when they took action.
 **/
export class InviteeReconfirmation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confirmed_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  confirmedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;
}
export enum InviteeStatusEnum {
  Active = "active",
  Canceled = "canceled",
}

// Invitee
/**
 * An individual who has been invited to meet with a Calendly member
 **/
export class Invitee extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cancel_url" })
  cancelUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "cancellation" })
  @Type(() => Cancellation)
  cancellation?: Cancellation;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "new_invitee" })
  newInvitee: string;

  @SpeakeasyMetadata()
  @Expose({ name: "no_show" })
  @Type(() => InviteeNoShow1)
  noShow: InviteeNoShow1;

  @SpeakeasyMetadata()
  @Expose({ name: "old_invitee" })
  oldInvitee: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => InviteePayment)
  payment: InviteePayment;

  @SpeakeasyMetadata({ elemType: InviteeQuestionAndAnswer })
  @Expose({ name: "questions_and_answers" })
  @Type(() => InviteeQuestionAndAnswer)
  questionsAndAnswers: InviteeQuestionAndAnswer[];

  @SpeakeasyMetadata()
  @Expose({ name: "reconfirmation" })
  @Type(() => InviteeReconfirmation)
  reconfirmation: InviteeReconfirmation;

  @SpeakeasyMetadata()
  @Expose({ name: "reschedule_url" })
  rescheduleUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rescheduled" })
  rescheduled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "routing_form_submission" })
  routingFormSubmission: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: InviteeStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "text_reminder_number" })
  textReminderNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => InviteeTracking)
  tracking: InviteeTracking;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}
