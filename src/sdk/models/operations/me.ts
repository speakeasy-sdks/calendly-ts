/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class MeErrorResponseDetails extends SpeakeasyBase {
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
export class MeErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MeErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => MeErrorResponseDetails)
  details?: MeErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

/**
 * Service response
 */
export class Me200ApplicationJSON extends SpeakeasyBase {
  /**
   * Information about the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.User)
  resource: shared.User;
}

export class MeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Cannot authenticate caller
   */
  @SpeakeasyMetadata()
  errorResponse?: MeErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  me200ApplicationJSONObject?: Me200ApplicationJSON;
}
