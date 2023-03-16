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
      "vero",
      "perspiciatis",
      "nulla",
    ],
    count: 423655,
    maxOccurredAt: "2022-07-31T10:34:53.736Z",
    minOccurredAt: "2022-07-23T06:58:01.674Z",
    namespace: [
      "iusto",
      "ullam",
    ],
    organization: "saepe",
    pageToken: "inventore",
    searchTerm: "sapiente",
    sort: [
      ActivityLogSortEnum.ActorDisplayNameDesc,
      ActivityLogSortEnum.ActorUriAsc,
    ],
  },
};

sdk.activityLog.activityLog(req).then((res: ActivityLogResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->