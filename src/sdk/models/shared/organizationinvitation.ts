/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The status of the invitation ("pending", "accepted", or "declined")
 */
export enum OrganizationInvitationStatusEnum {
  Pending = "pending",
  Accepted = "accepted",
  Declined = "declined",
}

/**
 * Organization Invitation object
 */
export class OrganizationInvitation extends SpeakeasyBase {
  /**
   * The moment the invitation was created (e.g. “2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The email address of the person who was invited to join the organization
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  /**
   * The moment the invitation was last sent (e.g. "2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_sent_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSentAt: Date;

  /**
   * Canonical reference (unique identifier) for the organization
   */
  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  /**
   * The status of the invitation ("pending", "accepted", or "declined")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: OrganizationInvitationStatusEnum;

  /**
   * The moment the invitation was last updated (e.g. "2020-01-02T03:04:05.678123Z")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  /**
   * Canonical reference (unique identifier) for the organization invitation
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;

  /**
   * When the invitation is accepted, a reference to the user who accepted the invitation
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}
