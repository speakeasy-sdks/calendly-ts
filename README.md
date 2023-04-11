# calendly

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add calendly
```

### Yarn

```bash
yarn add calendly
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ListScheduledEventsRequest,
  ListScheduledEventsResponse,
  ListScheduledEventsStatusEnum,
} from "calendly/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Calendly } from "calendly";
const sdk = new Calendly({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListScheduledEventsRequest = {
  count: 5488.14,
  inviteeEmail: "alice@example.com",
  maxStartTime: "provident",
  minStartTime: "distinctio",
  organization: "https://api.calendly.com/organizations/EBHAAFHDCAEQTSEZ",
  pageToken: "quibusdam",
  sort: "unde",
  status: ListScheduledEventsStatusEnum.Canceled,
  user: "https://api.calendly.com/users/EBHAAFHDCAEQTSEZ",
};

sdk.scheduledEvents.list(req).then((res: ListScheduledEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activityLog

* `list` - List activity log entries

### availability

* `get` - Get User Availability Schedule
* `getAvailability` - List User Availability Schedules
* `getBusyTimes` - List User Busy Times

### dataCompliance

* `createDeletionEvent` - Delete Scheduled Event Data
* `deleteInviteeData` - Delete Invitee Data

### eventTypes

* `get` - Get Event Type
* `getAvailableTimes` - List Event Type Available Times
* `list` - List User's Event Types

### organizations

* `deleteMemberships` - Remove User from Organization
* `getInvitations` - Get Organization Invitation
* `inviteUser` - Invite User to Organization
* `listInvitations` - List Organization Invitations
* `listMemberships` - List Organization Memberships
* `revokeInvite` - Revoke User's Organization Invitation

### routingForms

* `getSubmissions` - List Routing Form Submissions
* `getSubmissionsByUuid` - Get Routing Form Submission
* `getByUuid` - Get Routing Form
* `list` - List Routing Forms

### scheduledEvents

* `cancel` - Cancel Event
* `createNoShow` - Create Invitee No Show
* `getEventByUuid` - Get Event
* `getInvitees` - List Event Invitees
* `getInviteesByUuid` - Get Event Invitee
* `getNoShow` - Get Invitee No Show
* `list` - List Events
* `unmarkNoShow` - Delete Invitee No Show

### schedulingLinks

* `create` - Create Single-Use Scheduling Link

### shares

* `create` - Create Share

### users

* `get` - Get user
* `getMemberships` - Get Organization Membership
* `me` - Get current user

### webhooks

* `create` - Create Webhook Subscription
* `delete` - Delete Webhook Subscription
* `get` - Get Webhook Subscription
* `list` - List Webhook Subscriptions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

