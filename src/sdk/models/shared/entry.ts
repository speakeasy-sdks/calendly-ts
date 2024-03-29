/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Actor } from "./actor";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Object for a created activity log record
 */
export class Entry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: string;

  /**
   * The Calendly actor that took the action creating the activity log entry
   *
   * @remarks
   *
   * Specific actors:
   *
   * <details>
   * <summary>Calendly System</summary>
   *
   * Used when an action is performed by the Calendly system and not triggered directly by a user interaction.
   *
   * Example:
   * ```json
   * {
   *     "display_name": "Calendly System",
   *     "type": "System"
   * }
   * ```
   *
   * </details>
   *
   * <br />
   *
   * <details>
   * <summary>Calendly Support</summary>
   * Used when an action is performed by Calendly support.
   *
   * Example:
   * ```json
   * {
   *   "display_name": "Calendly Support",
   *   "organization": {
   *     "uri": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA"
   *   },
   *   "type": "User",
   *   "uri": "https://api.calendly.com/users/AAAAAAAAAAAAAAAA"
   * }
   * ```
   * </details>
   *
   */
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

  /**
   * The date and time of the entry (format: "2020-01-02T03:04:05.678Z").
   */
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
