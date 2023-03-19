import * as utils from "../internal/utils";
import { ActivityLog } from "./activitylog";
import { Availability } from "./availability";
import { DataCompliance } from "./datacompliance";
import { EventTypes } from "./eventtypes";
import * as shared from "./models/shared";
import { Organizations } from "./organizations";
import { RoutingForms } from "./routingforms";
import { ScheduledEvents } from "./scheduledevents";
import { SchedulingLinks } from "./schedulinglinks";
import { Shares } from "./shares";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://api.calendly.com"] as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: Calendly’s API is [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)-based and has predictable resource-oriented URLs. It uses **JSON** for request and response bodies and standard HTTP methods, authentication, and response codes.<br>
 *
 * ##### Authenticate with personal access tokens or OAuth 2.0
 *
 * To access Calendly data through the API, you can authenticate with **personal access tokens** or **OAuth 2.0**. To learn more about these authentication methods and when and how to use them, see [Getting Started with the Calendly API](https://developer.calendly.com/getting-started).
 */
export class SDK {
  public activityLog: ActivityLog;
  public availability: Availability;
  public dataCompliance: DataCompliance;
  public eventTypes: EventTypes;
  public organizations: Organizations;
  public routingForms: RoutingForms;
  public scheduledEvents: ScheduledEvents;
  public schedulingLinks: SchedulingLinks;
  public shares: Shares;
  public users: Users;
  public webhooks: Webhooks;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.1.0";
  private _genVersion = "1.12.3";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.activityLog = new ActivityLog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.availability = new Availability(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.dataCompliance = new DataCompliance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.eventTypes = new EventTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.organizations = new Organizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.routingForms = new RoutingForms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.scheduledEvents = new ScheduledEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.schedulingLinks = new SchedulingLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.shares = new Shares(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}