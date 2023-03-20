import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostOrganizationsUuidInvitationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=uuid",
  })
  uuid: string;
}

export class PostOrganizationsUuidInvitationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;
}

export class PostOrganizationsUuidInvitationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOrganizationsUuidInvitationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOrganizationsUuidInvitationsRequestBody;
}
export enum PostOrganizationsUuidInvitations403ApplicationJSONMessageEnum {
  YouAlreadySentAllTheInvitationsYouReAllottedBasedUponTheNumberOfSeatsPurchasedWithYourAccountPleasePurchaseMoreSeatsToSendMoreInvitations = "You already sent all the invitations you're allotted based upon the number of seats purchased with your account. Please purchase more seats to send more invitations.",
  YouAlreadySentAllTheInvitationsAllottedToYouWithATrialAccount = "You already sent all the invitations allotted to you with a trial account.",
  YouDoNotHavePermission = "You do not have permission",
  YouCannotPerformThisActionForAnOrganizationWithSCIMEnabled = "You cannot perform this action for an organization with SCIM enabled.",
}
export enum PostOrganizationsUuidInvitations403ApplicationJSONTitleEnum {
  PermissionDenied = "Permission Denied",
}

export class PostOrganizationsUuidInvitations403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: PostOrganizationsUuidInvitations403ApplicationJSONMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PostOrganizationsUuidInvitations403ApplicationJSONTitleEnum;
}

export class PostOrganizationsUuidInvitationsErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// PostOrganizationsUuidInvitationsErrorResponse
/**
 * Error Object
 **/
export class PostOrganizationsUuidInvitationsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostOrganizationsUuidInvitationsErrorResponseDetails,
  })
  @Expose({ name: "details" })
  @Type(() => PostOrganizationsUuidInvitationsErrorResponseDetails)
  details?: PostOrganizationsUuidInvitationsErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class PostOrganizationsUuidInvitations201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.OrganizationInvitation)
  resource: shared.OrganizationInvitation;
}

export class PostOrganizationsUuidInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse1?: PostOrganizationsUuidInvitationsErrorResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postOrganizationsUuidInvitations201ApplicationJSONObject?: PostOrganizationsUuidInvitations201ApplicationJSON;

  @SpeakeasyMetadata()
  postOrganizationsUuidInvitations403ApplicationJSONObject?: PostOrganizationsUuidInvitations403ApplicationJSON;
}
