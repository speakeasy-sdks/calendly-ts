import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetRoutingFormsUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetRoutingFormsUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetRoutingFormsUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoutingFormsUuidPathParams;

  @SpeakeasyMetadata()
  security: GetRoutingFormsUuidSecurity;
}

export class GetRoutingFormsUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetRoutingFormsUuidErrorResponse
/** 
 * Error Object
**/
export class GetRoutingFormsUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRoutingFormsUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetRoutingFormsUuidErrorResponseDetails)
  details?: GetRoutingFormsUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetRoutingFormsUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.RoutingForm)
  resource: shared.RoutingForm;
}

export class GetRoutingFormsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetRoutingFormsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getRoutingFormsUuid200ApplicationJSONObject?: GetRoutingFormsUuid200ApplicationJSON;
}