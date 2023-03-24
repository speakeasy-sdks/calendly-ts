/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetRoutingFormsUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class GetRoutingFormsUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoutingFormsUuidPathParams;
}

export class GetRoutingFormsUuidErrorResponseDetails extends SpeakeasyBase {
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

/**
 * OK
 */
export class GetRoutingFormsUuid200ApplicationJSON extends SpeakeasyBase {
  /**
   * Information about a routing form.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.RoutingForm)
  resource: shared.RoutingForm;
}

export class GetRoutingFormsUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request is not valid
   */
  @SpeakeasyMetadata()
  errorResponse?: GetRoutingFormsUuidErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getRoutingFormsUuid200ApplicationJSONObject?: GetRoutingFormsUuid200ApplicationJSON;
}
