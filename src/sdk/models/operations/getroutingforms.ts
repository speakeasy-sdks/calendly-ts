import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetRoutingFormsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}

export class GetRoutingFormsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRoutingFormsQueryParams;
}

export class GetRoutingFormsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetRoutingFormsErrorResponse
/** 
 * Error Object
**/
export class GetRoutingFormsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRoutingFormsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetRoutingFormsErrorResponseDetails)
  details?: GetRoutingFormsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetRoutingForms200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.RoutingForm })
  @Expose({ name: "collection" })
  @Type(() => shared.RoutingForm)
  collection: shared.RoutingForm[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetRoutingFormsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetRoutingFormsErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getRoutingForms200ApplicationJSONObject?: GetRoutingForms200ApplicationJSON;
}