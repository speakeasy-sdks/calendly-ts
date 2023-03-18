import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next_page" })
  nextPage: string;

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous_page" })
  previousPage: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous_page_token" })
  previousPageToken: string;
}
