import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// ErrorResponse
/**
 * Error Object
 **/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => ErrorResponseDetails)
  details?: ErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}
