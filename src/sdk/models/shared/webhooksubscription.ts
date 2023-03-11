import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum WebhookSubscriptionEventsEnum {
    InviteeCreated = "invitee.created",
    InviteeCanceled = "invitee.canceled",
    RoutingFormSubmissionCreated = "routing_form_submission.created"
}
export enum WebhookSubscriptionScopeEnum {
    User = "user",
    Organization = "organization"
}
export enum WebhookSubscriptionStateEnum {
    Active = "active",
    Disabled = "disabled"
}

// WebhookSubscription
/** 
 * Webhook Subscription Object
**/
export class WebhookSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "callback_url" })
  callbackUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "creator" })
  creator: string;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: WebhookSubscriptionEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "retry_started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  retryStartedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope: WebhookSubscriptionScopeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: WebhookSubscriptionStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user: string;
}