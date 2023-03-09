<!-- Start SDK Example Usage -->
```typescript
import {
  ActivityLogRequest,
  ActivityLogResponse 
} from "calendly/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "calendly";


const sdk = new SDK();
    
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
    maxOccurredAt: "2022-07-24T22:01:42.290Z",
    minOccurredAt: "2022-07-16T18:24:50.228Z",
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