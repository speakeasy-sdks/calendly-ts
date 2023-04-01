# calendly

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/calendly-ts-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/calendly-ts-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ActivityLogRequest,
  ActivityLogResponse,
  ActivityLogSortEnum,
} from "calendly/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "calendly";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ActivityLogRequest = {
  action: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  actor: [
    "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
    "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
    "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
  ],
  count: 857946,
  maxOccurredAt: "2021-04-22T12:08:58.275Z",
  minOccurredAt: "2022-05-18T09:34:54.894Z",
  namespace: [
    "suscipit",
    "iure",
    "magnam",
  ],
  organization: "https://api.calendly.com/organizations/EBHAAFHDCAEQTSEZ",
  pageToken: "debitis",
  searchTerm: "ipsa",
  sort: [
    ActivityLogSortEnum.ActorDisplayNameAsc,
    ActivityLogSortEnum.ActorDisplayNameDesc,
    ActivityLogSortEnum.ActorUriAsc,
    ActivityLogSortEnum.NamespaceDesc,
  ],
};

sdk.activityLog.activityLog(req).then((res: ActivityLogResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activityLog

* `activityLog` - List activity log entries

### availability

* `getUserAvailabilitySchedules` - List User Availability Schedules
* `getUserAvailabilitySchedulesUuid` - Get User Availability Schedule
* `getUserBusyTimes` - List User Busy Times

### dataCompliance

* `postDataComplianceDeletionEvents` - Delete Scheduled Event Data
* `postDataComplianceDeletionInvitees` - Delete Invitee Data

### eventTypes

* `getEventTypesUuid` - Get Event Type
* `getEventTypeAvailableTimes` - List Event Type Available Times
* `getEventTypes` - List User's Event Types

### organizations

* `deleteOrganizationsUuidMemberships` - Remove User from Organization
* `getOrganizationMemberships` - List Organization Memberships
* `getOrganizationsOrgUuidInvitationsUuid` - Get Organization Invitation
* `getOrganizationsUuidInvitations` - List Organization Invitations
* `getOrganizationsUuidMemberships` - Get Organization Membership
* `postOrganizationsUuidInvitations` - Invite User to Organization
* `revokeUsersOrganizationInvitation` - Revoke User's Organization Invitation

### routingForms

* `getRoutingFormSubmissions` - List Routing Form Submissions
* `getRoutingFormSubmissionsUuid` - Get Routing Form Submission
* `getRoutingForms` - List Routing Forms
* `getRoutingFormsUuid` - Get Routing Form

### scheduledEvents

* `deleteInviteeNoShow` - Delete Invitee No Show
* `getScheduledEventsEventUuidInviteesInviteeUuid` - Get Event Invitee
* `getScheduledEventsUuid` - Get Event
* `getInviteeNoShow` - Get Invitee No Show
* `getInvitees` - List Event Invitees
* `getScheduledEvents` - List Events
* `postScheduledEventsUuidCancellationJson` - Cancel Event
* `postScheduledEventsUuidCancellationMultipart` - Cancel Event
* `postScheduledEventsUuidCancellationRaw` - Cancel Event
* `postInviteeNoShow` - Create Invitee No Show

### schedulingLinks

* `postSchedulingLinks` - Create Single-Use Scheduling Link

### shares

* `postShares` - Create Share

### users

* `getMyUserAccount` - Get current user
* `getUser` - Get user

### webhooks

* `deleteUsersUserUuidWebhooksWebhookUuid` - Delete Webhook Subscription
* `getUsersUserUuidWebhooksWebhookUuid` - Get Webhook Subscription
* `getWebhooks` - List Webhook Subscriptions
* `postUsersUuidWebhooks` - Create Webhook Subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

