import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum ActivityLogSortEnum {
    ActionAsc = "action:asc",
    ActionDesc = "action:desc",
    ActorDisplayNameAsc = "actor.display_name:asc",
    ActorDisplayNameDesc = "actor.display_name:desc",
    ActorUriAsc = "actor.uri:asc",
    ActorUriDesc = "actor.uri:desc",
    NamespaceAsc = "namespace:asc",
    NamespaceDesc = "namespace:desc",
    OccurredAtAsc = "occurred_at:asc",
    OccurredAtDesc = "occurred_at:desc"
}

export class ActivityLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=action" })
  action?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=actor" })
  actor?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_occurred_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  maxOccurredAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_occurred_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  minOccurredAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=namespace" })
  namespace?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_term" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: ActivityLogSortEnum[];
}

export class ActivityLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivityLogQueryParams;
}

export class ActivityLogErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// ActivityLogErrorResponse
/** 
 * Error Object
**/
export class ActivityLogErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ActivityLogErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => ActivityLogErrorResponseDetails)
  details?: ActivityLogErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
export enum ActivityLog403ApplicationJSONMessageEnum {
    PleaseUpgradeYourCalendlyAccountToEnterprise = "Please upgrade your Calendly account to Enterprise.",
    YouDoNotHavePermissionToAccessThisResource = "You do not have permission to access this resource."
}
export enum ActivityLog403ApplicationJSONTitleEnum {
    PermissionDenied = "Permission Denied"
}

export class ActivityLog403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: ActivityLog403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: ActivityLog403ApplicationJSONTitleEnum;
}

// ActivityLog200ApplicationJSON
/** 
 * Activity log response
**/
export class ActivityLog200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Entry })
  @Expose({ name: "collection" })
  @Type(() => shared.Entry)
  collection: shared.Entry[];

  @SpeakeasyMetadata()
  @Expose({ name: "exceeds_max_total_count" })
  exceedsMaxTotalCount: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_event_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastEventTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => shared.Pagination)
  pagination: shared.Pagination;

  @SpeakeasyMetadata()
  @Expose({ name: "total_count" })
  totalCount: number;
}

export class ActivityLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: ActivityLogErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  activityLog200ApplicationJSONObject?: ActivityLog200ApplicationJSON;

  @SpeakeasyMetadata()
  activityLog403ApplicationJSONObject?: ActivityLog403ApplicationJSON;
}