import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PostDataComplianceDeletionInviteesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class PostDataComplianceDeletionInviteesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails: string[];
}

export class PostDataComplianceDeletionInviteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDataComplianceDeletionInviteesRequestBody;

  @SpeakeasyMetadata()
  security: PostDataComplianceDeletionInviteesSecurity;
}

export class PostDataComplianceDeletionInviteesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostDataComplianceDeletionInviteesErrorResponse
/** 
 * Error Object
**/
export class PostDataComplianceDeletionInviteesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostDataComplianceDeletionInviteesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => PostDataComplianceDeletionInviteesErrorResponseDetails)
  details?: PostDataComplianceDeletionInviteesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PostDataComplianceDeletionInviteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostDataComplianceDeletionInviteesErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postDataComplianceDeletionInvitees202ApplicationJSONObject?: Record<string, any>;
}