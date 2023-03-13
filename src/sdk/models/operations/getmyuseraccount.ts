import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetMyUserAccountErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetMyUserAccountErrorResponse
/** 
 * Error Object
**/
export class GetMyUserAccountErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetMyUserAccountErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetMyUserAccountErrorResponseDetails)
  details?: GetMyUserAccountErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

// GetMyUserAccount200ApplicationJSON
/** 
 * Service response
**/
export class GetMyUserAccount200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.User)
  resource: shared.User;
}

export class GetMyUserAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetMyUserAccountErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getMyUserAccount200ApplicationJSONObject?: GetMyUserAccount200ApplicationJSON;
}