import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Actor } from "./actor";
import { Expose, Transform, Type } from "class-transformer";


// Entry
/** 
 * Object for a created activity log record
**/
export class Entry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: string;

  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => Actor)
  actor?: Actor;

  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "fully_qualified_name" })
  fullyQualifiedName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  namespace: string;

  @SpeakeasyMetadata()
  @Expose({ name: "occurred_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  occurredAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}