import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export enum OrganizationMembershipRoleEnum {
  User = "user",
  Admin = "admin",
  Owner = "owner",
}

// OrganizationMembershipUser
/**
 * Information about the user.
 **/
export class OrganizationMembershipUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduling_url" })
  schedulingUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}

export class OrganizationMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role: OrganizationMembershipRoleEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => OrganizationMembershipUser)
  user: OrganizationMembershipUser;
}
