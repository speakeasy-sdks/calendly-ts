import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetScheduledEventsEventUuidInviteesInviteeUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;
}

export class GetScheduledEventsEventUuidInviteesInviteeUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_uuid" })
  eventUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitee_uuid" })
  inviteeUuid: string;
}

export class GetScheduledEventsEventUuidInviteesInviteeUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledEventsEventUuidInviteesInviteeUuidPathParams;

  @SpeakeasyMetadata()
  security: GetScheduledEventsEventUuidInviteesInviteeUuidSecurity;
}

export class GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

// GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse
/** 
 * Error Object
**/
export class GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponseDetails })
  @Expose({ name: "details" })
  @Type(() => GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponseDetails)
  details?: GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponseDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}

export class GetScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  @Type(() => shared.Invitee)
  resource: shared.Invitee;
}

export class GetScheduledEventsEventUuidInviteesInviteeUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: GetScheduledEventsEventUuidInviteesInviteeUuidErrorResponse;

  @SpeakeasyMetadata()
  errorResponse1?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSONObject?: GetScheduledEventsEventUuidInviteesInviteeUuid200ApplicationJSON;
}