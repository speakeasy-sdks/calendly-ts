import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class PostDataComplianceDeletionEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime: Date;
}

export class PostDataComplianceDeletionEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDataComplianceDeletionEventsRequestBody;
}

export class PostDataComplianceDeletionEventsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostDataComplianceDeletionEventsErrorResponse
/**
 * Error Object
 **/
export class PostDataComplianceDeletionEventsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostDataComplianceDeletionEventsErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => PostDataComplianceDeletionEventsErrorResponseDetails)
  details?: PostDataComplianceDeletionEventsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PostDataComplianceDeletionEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: PostDataComplianceDeletionEventsErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postDataComplianceDeletionEvents202ApplicationJSONObject?: Record<
    string,
    any
  >;
}
