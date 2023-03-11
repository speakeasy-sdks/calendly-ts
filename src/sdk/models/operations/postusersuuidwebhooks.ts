import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PostUsersUuidWebhooksRequestBodyEventsEnum {
    InviteeCanceled = "invitee.canceled",
    InviteeCreated = "invitee.created",
    RoutingFormSubmissionCreated = "routing_form_submission.created"
}
export enum PostUsersUuidWebhooksRequestBodyScopeEnum {
    Organization = "organization",
    User = "user"
}

export class PostUsersUuidWebhooksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: PostUsersUuidWebhooksRequestBodyEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope: PostUsersUuidWebhooksRequestBodyScopeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "signing_key" })
  signingKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}

export class PostUsersUuidWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostUsersUuidWebhooksRequestBody;
}

export class PostUsersUuidWebhooksErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostUsersUuidWebhooksErrorResponse
/** 
 * Error Object
**/
export class PostUsersUuidWebhooksErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostUsersUuidWebhooksErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostUsersUuidWebhooksErrorResponseDetails)
  details?: PostUsersUuidWebhooksErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum PostUsersUuidWebhooks403ApplicationJSONMessageEnum {
    PleaseUpgradeYourCalendlyAccountToProfessional = "Please upgrade your Calendly account to Professional",
    YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
    YouDoNotHavePermission = "You do not have permission"
}
export enum PostUsersUuidWebhooks403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class PostUsersUuidWebhooks403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: PostUsersUuidWebhooks403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PostUsersUuidWebhooks403ApplicationJSONTitleEnum;
}

export class PostUsersUuidWebhooks201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.WebhookSubscription)
  resource: shared.WebhookSubscription;
}

export class PostUsersUuidWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostUsersUuidWebhooksErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postUsersUuidWebhooks201ApplicationJSONObject?: PostUsersUuidWebhooks201ApplicationJSON;

  @SpeakeasyMetadata()
  postUsersUuidWebhooks403ApplicationJSONObject?: PostUsersUuidWebhooks403ApplicationJSON;
}