<!-- Start SDK Example Usage -->
```typescript
import {
  ActivityLogRequest,
  ActivityLogResponse 
} from "calendly/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "calendly";

const sdk = new SDK({
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
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
    maxOccurredAt: "2022-07-25T10:36:53.291Z",
    minOccurredAt: "2022-07-17T07:00:01.229Z",
    namespace: [
      "iusto",
      "ullam",
    ],
    organization: "saepe",
    pageToken: "inventore",
    searchTerm: "sapiente",
    sort: [
      "actor.uri:asc",
      "actor.uri:desc",
    ],
  },
};

sdk.activityLog.activityLog(req).then((res: ActivityLogResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->