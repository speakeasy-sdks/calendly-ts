/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteUsersUserUuidWebhooksWebhookUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhook_uuid",
  })
  webhookUuid: string;
}

export class DeleteUsersUserUuidWebhooksWebhookUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

/**
 * Error Object
 */
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

  /**
   * Cannot authenticate caller
   */
  @SpeakeasyMetadata()
  errorResponse?: DeleteUsersUserUuidWebhooksWebhookUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
