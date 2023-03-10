import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostInviteeNoShowRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invitee" })
  invitee?: string;
}

export class PostInviteeNoShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostInviteeNoShowRequestBody;
}

export class PostInviteeNoShowErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostInviteeNoShowErrorResponse
/** 
 * Error Object
**/
export class PostInviteeNoShowErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostInviteeNoShowErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostInviteeNoShowErrorResponseDetails)
  details?: PostInviteeNoShowErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PostInviteeNoShow201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.InviteeNoShow)
  resource: shared.InviteeNoShow;
}

export class PostInviteeNoShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostInviteeNoShowErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postInviteeNoShow201ApplicationJSONObject?: PostInviteeNoShow201ApplicationJSON;
}