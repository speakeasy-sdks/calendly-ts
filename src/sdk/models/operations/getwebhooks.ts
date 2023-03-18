import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum GetWebhooksScopeEnum {
  Organization = "organization",
  User = "user",
}

export class GetWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=organization",
  })
  organization: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_token",
  })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: GetWebhooksScopeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWebhooksQueryParams;
}
export enum GetWebhooks403ApplicationJSONMessageEnum {
  YouDoNotHavePermission = "You do not have permission",
  YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
  Unauthorized = "Unauthorized",
}
export enum GetWebhooks403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

export class GetWebhooks403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetWebhooks403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetWebhooks403ApplicationJSONTitleEnum;
}

export class GetWebhooksErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetWebhooksErrorResponse
/**
 * Error Object
 **/
export class GetWebhooksErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetWebhooksErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetWebhooksErrorResponseDetails)
  details?: GetWebhooksErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.WebhookSubscription })
  @Expose({ name: "collection" })
  @Type(() => shared.WebhookSubscription)
  collection: shared.WebhookSubscription[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetWebhooksErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;

  @SpeakeasyMetadata()
  getWebhooks403ApplicationJSONObject?: GetWebhooks403ApplicationJSON;
}
