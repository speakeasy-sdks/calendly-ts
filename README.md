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
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
});

const req: ActivityLogRequest = {
  queryParams: {
    action: [
      "deserunt",
      "porro",
      "nulla",
    ],
    actor: [
      "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
      "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
      "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
    ],
    count: 857946,
    maxOccurredAt: "2022-09-09T03:43:47.159Z",
    minOccurredAt: "2022-05-21T18:58:52.557Z",
    namespace: [
      "fuga",
      "facilis",
    ],
    organization: "https://api.calendly.com/organizations/EBHAAFHDCAEQTSEZ",
    pageToken: "eum",
    searchTerm: "iusto",
    sort: [
      ActivityLogSortEnum.OccurredAtAsc,
      ActivityLogSortEnum.ActionAsc,
    ],
  },
};

sdk.activityLog.activityLog(req).then((res: ActivityLogResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
