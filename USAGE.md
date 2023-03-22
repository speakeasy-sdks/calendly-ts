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
    maxOccurredAt: "2022-09-04T03:43:52.282Z",
    minOccurredAt: "2022-05-16T18:58:57.680Z",
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