import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum OrganizationInvitationStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Declined = "declined"
}

// OrganizationInvitation
/** 
 * Organization Invitation object
**/
export class OrganizationInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_sent_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSentAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: OrganizationInvitationStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}