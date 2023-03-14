import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// InviteeNoShow
/** 
 * Information about an invitees no show.
**/
export class InviteeNoShow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "invitee" })
  invitee: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri: string;
}