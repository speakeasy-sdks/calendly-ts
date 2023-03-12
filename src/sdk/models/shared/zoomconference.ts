import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class ZoomConferenceDataExtra extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "intl_numbers_url" })
  intlNumbersUrl?: string;
}

export class ZoomConferenceDataSettingsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country_name" })
  countryName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class ZoomConferenceDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ZoomConferenceDataSettingsGlobalDialInNumbers })
  @Expose({ name: "global_dial_in_numbers" })
  @Type(() => ZoomConferenceDataSettingsGlobalDialInNumbers)
  globalDialInNumbers?: ZoomConferenceDataSettingsGlobalDialInNumbers[];
}

// ZoomConferenceData
/** 
 * The conference metadata supplied by Zoom
**/
export class ZoomConferenceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "extra" })
  @Type(() => ZoomConferenceDataExtra)
  extra?: ZoomConferenceDataExtra;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "settings" })
  @Type(() => ZoomConferenceDataSettings)
  settings?: ZoomConferenceDataSettings;
}
export enum ZoomConferenceStatusEnum {
    Initiated = "initiated",
    Processing = "processing",
    Pushed = "pushed",
    Failed = "failed"
}
export enum ZoomConferenceTypeEnum {
    ZoomConference = "zoom_conference"
}

// ZoomConference
/** 
 * Meeting will take place in a Zoom conference
**/
export class ZoomConference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ZoomConferenceData)
  data: ZoomConferenceData;

  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ZoomConferenceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ZoomConferenceTypeEnum;
}