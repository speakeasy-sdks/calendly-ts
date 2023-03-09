import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetEventTypesUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetEventTypesUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetEventTypesUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventTypesUuidPathParams;

  @SpeakeasyMetadata()
  security: GetEventTypesUuidSecurity;
}

export class GetEventTypesUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetEventTypesUuidErrorResponse
/** 
 * Error Object
**/
export class GetEventTypesUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEventTypesUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetEventTypesUuidErrorResponseDetails)
  details?: GetEventTypesUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetEventTypesUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.EventType)
  resource: shared.EventType;
}

export class GetEventTypesUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetEventTypesUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getEventTypesUuid200ApplicationJSONObject?: GetEventTypesUuid200ApplicationJSON;
}