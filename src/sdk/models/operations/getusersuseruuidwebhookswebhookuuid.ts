import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetUsersUserUuidWebhooksWebhookUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetUsersUserUuidWebhooksWebhookUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_uuid" })
  webhookUuid: string;
}

export class GetUsersUserUuidWebhooksWebhookUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserUuidWebhooksWebhookUuidPathParams;

  @SpeakeasyMetadata()
  security: GetUsersUserUuidWebhooksWebhookUuidSecurity;
}

export class GetUsersUserUuidWebhooksWebhookUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetUsersUserUuidWebhooksWebhookUuidErrorResponse
/** 
 * Error Object
**/
export class GetUsersUserUuidWebhooksWebhookUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetUsersUserUuidWebhooksWebhookUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetUsersUserUuidWebhooksWebhookUuidErrorResponseDetails)
  details?: GetUsersUserUuidWebhooksWebhookUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetUsersUserUuidWebhooksWebhookUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.WebhookSubscription)
  resource: shared.WebhookSubscription;
}

export class GetUsersUserUuidWebhooksWebhookUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetUsersUserUuidWebhooksWebhookUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getUsersUserUuidWebhooksWebhookUuid200ApplicationJSONObject?: GetUsersUserUuidWebhooksWebhookUuid200ApplicationJSON;
}