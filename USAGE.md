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