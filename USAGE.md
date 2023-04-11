<!-- Start SDK Example Usage -->
```typescript
import {
  ListScheduledEventsRequest,
  ListScheduledEventsResponse,
  ListScheduledEventsStatusEnum,
} from "calendly/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "calendly";
const sdk = new SDK({
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