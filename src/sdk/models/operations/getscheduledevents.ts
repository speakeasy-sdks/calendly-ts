import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum GetScheduledEventsStatusEnum {
    Active = "active",
    Canceled = "canceled"
}

export class GetScheduledEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitee_email" })
  inviteeEmail?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_start_time" })
  maxStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_start_time" })
  minStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetScheduledEventsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}

export class GetScheduledEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetScheduledEventsQueryParams;
}

export class GetScheduledEventsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetScheduledEventsErrorResponse
/** 
 * Error Object
**/
export class GetScheduledEventsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetScheduledEventsErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetScheduledEventsErrorResponseDetails)
  details?: GetScheduledEventsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum GetScheduledEvents403ApplicationJSONMessageEnum {
    YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource.",
    PleaseAlsoSpecifyOrganizationWhenRequestingEventsForAUserWithinYourOrganization = "Please also specify organization when requesting events for a user within your organization.",
    ThisUserIsNotInYourOrganization = "This user is not in your organization",
    YouDoNotHavePermission = "You do not have permission"
}
export enum GetScheduledEvents403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class GetScheduledEvents403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: GetScheduledEvents403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: GetScheduledEvents403ApplicationJSONTitleEnum;
}

// GetScheduledEvents200ApplicationJSON
/** 
 * Service response
**/
export class GetScheduledEvents200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Event })
  @Expose({ name: "collection" })
  @Type(() => shared.Event)
  collection: shared.Event[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;
}

export class GetScheduledEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetScheduledEventsErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getScheduledEvents200ApplicationJSONObject?: GetScheduledEvents200ApplicationJSON;

  @SpeakeasyMetadata()
  getScheduledEvents403ApplicationJSONObject?: GetScheduledEvents403ApplicationJSON;
}