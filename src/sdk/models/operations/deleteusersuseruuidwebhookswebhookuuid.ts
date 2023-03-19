import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteUsersUserUuidWebhooksWebhookUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhook_uuid",
  })
  webhookUuid: string;
}

export class DeleteUsersUserUuidWebhooksWebhookUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersUserUuidWebhooksWebhookUuidPathParams;
}

export class DeleteUsersUserUuidWebhooksWebhookUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse
/**
 * Error Object
 **/
export class DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: DeleteUsersUserUuidWebhooksWebhookUuidErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => DeleteUsersUserUuidWebhooksWebhookUuidErrorResponseDetails)
  details?: DeleteUsersUserUuidWebhooksWebhookUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class DeleteUsersUserUuidWebhooksWebhookUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}