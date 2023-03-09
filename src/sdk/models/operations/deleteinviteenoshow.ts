import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class DeleteInviteeNoShowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class DeleteInviteeNoShowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class DeleteInviteeNoShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInviteeNoShowPathParams;

  @SpeakeasyMetadata()
  security: DeleteInviteeNoShowSecurity;
}

export class DeleteInviteeNoShowErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// DeleteInviteeNoShowErrorResponse
/** 
 * Error Object
**/
export class DeleteInviteeNoShowErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteInviteeNoShowErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => DeleteInviteeNoShowErrorResponseDetails)
  details?: DeleteInviteeNoShowErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class DeleteInviteeNoShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: DeleteInviteeNoShowErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}