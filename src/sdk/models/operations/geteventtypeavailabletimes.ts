import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetEventTypeAvailableTimesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_time",
  })
  endTime?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=event_type",
  })
  eventType?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_time",
  })
  startTime?: string;
}

export class GetEventTypeAvailableTimesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventTypeAvailableTimesQueryParams;
}

export class GetEventTypeAvailableTimesErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetEventTypeAvailableTimesErrorResponse
/**
 * Error Object
 **/
export class GetEventTypeAvailableTimesErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetEventTypeAvailableTimesErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => GetEventTypeAvailableTimesErrorResponseDetails)
  details?: GetEventTypeAvailableTimesErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

// GetEventTypeAvailableTimes200ApplicationJSON
/**
 * Service Response
 **/
export class GetEventTypeAvailableTimes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.EventTypeAvailableTime })
  @Expose({ name: "collection" })
  @Type(() => shared.EventTypeAvailableTime)
  collection: shared.EventTypeAvailableTime[];
}

export class GetEventTypeAvailableTimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetEventTypeAvailableTimesErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getEventTypeAvailableTimes200ApplicationJSONObject?: GetEventTypeAvailableTimes200ApplicationJSON;
}
