import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetRoutingFormSubmissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetRoutingFormSubmissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form" })
  form: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}

export class GetRoutingFormSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRoutingFormSubmissionsQueryParams;

  @SpeakeasyMetadata()
  security: GetRoutingFormSubmissionsSecurity;
}

export class GetRoutingFormSubmissionsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetRoutingFormSubmissionsErrorResponse
/** 
 * Error Object
**/
export class GetRoutingFormSubmissionsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRoutingFormSubmissionsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetRoutingFormSubmissionsErrorResponseDetails)
  details?: GetRoutingFormSubmissionsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetRoutingFormSubmissions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.RoutingFormSubmission })
  @Expose({ name: "collection" })
  @Type(() => shared.RoutingFormSubmission)
  collection: shared.RoutingFormSubmission[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetRoutingFormSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetRoutingFormSubmissionsErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getRoutingFormSubmissions200ApplicationJSONObject?: GetRoutingFormSubmissions200ApplicationJSON;
}