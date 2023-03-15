import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetEventTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=active",
  })
  active?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=admin_managed",
  })
  adminManaged?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=organization",
  })
  organization?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_token",
  })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export class GetEventTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventTypesQueryParams;
}
export enum GetEventTypes403ApplicationJSONMessageEnum {
  ThisUserIsNotInYourOrganization = "This user is not in your organization",
  YouDoNotHavePermission = "You do not have permission",
  YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
}
export enum GetEventTypes403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

export class GetEventTypes403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetEventTypes403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetEventTypes403ApplicationJSONTitleEnum;
}

export class GetEventTypesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetEventTypesErrorResponse
/**
 * Error Object
 **/
export class GetEventTypesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEventTypesErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetEventTypesErrorResponseDetails)
  details?: GetEventTypesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

// GetEventTypes200ApplicationJSON
/**
 * Service response
 **/
export class GetEventTypes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.EventType })
  @Expose({ name: "collection" })
  @Type(() => shared.EventType)
  collection: shared.EventType[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetEventTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetEventTypesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getEventTypes200ApplicationJSONObject?: GetEventTypes200ApplicationJSON;

  @SpeakeasyMetadata()
  getEventTypes403ApplicationJSONObject?: GetEventTypes403ApplicationJSON;
}
