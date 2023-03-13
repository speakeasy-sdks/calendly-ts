import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetRoutingFormSubmissionsUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export class GetRoutingFormSubmissionsUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoutingFormSubmissionsUuidPathParams;
}

export class GetRoutingFormSubmissionsUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetRoutingFormSubmissionsUuidErrorResponse
/** 
 * Error Object
**/
export class GetRoutingFormSubmissionsUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRoutingFormSubmissionsUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetRoutingFormSubmissionsUuidErrorResponseDetails)
  details?: GetRoutingFormSubmissionsUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetRoutingFormSubmissionsUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.RoutingFormSubmission)
  resource: shared.RoutingFormSubmission;
}

export class GetRoutingFormSubmissionsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetRoutingFormSubmissionsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getRoutingFormSubmissionsUuid200ApplicationJSONObject?: GetRoutingFormSubmissionsUuid200ApplicationJSON;
}