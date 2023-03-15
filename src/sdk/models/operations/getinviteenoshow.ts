import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetInviteeNoShowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class GetInviteeNoShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInviteeNoShowPathParams;
}

export class GetInviteeNoShowErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetInviteeNoShowErrorResponse
/**
 * Error Object
 **/
export class GetInviteeNoShowErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetInviteeNoShowErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetInviteeNoShowErrorResponseDetails)
  details?: GetInviteeNoShowErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetInviteeNoShow200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.InviteeNoShow)
  resource: shared.InviteeNoShow;
}

export class GetInviteeNoShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetInviteeNoShowErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getInviteeNoShow200ApplicationJSONObject?: GetInviteeNoShow200ApplicationJSON;
}
