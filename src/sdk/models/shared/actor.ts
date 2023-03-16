import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

// ActorGroup
/**
 * User group information about the actor
 **/
export class ActorGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;
}

export class ActorOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;
}

// Actor
/**
 * The Calendly actor that took the action creating the activity log entry
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
 **/
export class Actor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alternative_identifier" })
  alternativeIdentifier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "group" })
  @Type(() => ActorGroup)
  group?: ActorGroup;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  @Type(() => ActorOrganization)
  organization?: ActorOrganization;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;
}
