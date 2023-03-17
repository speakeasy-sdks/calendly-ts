import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Organizations {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * deleteOrganizationsUuidMemberships - Remove User from Organization
   *
   * Removes a user from an organization.
   *
   * Notes:
   *
   * * To remove users, the caller must have admin rights for the organization
   *
   * * An organization owner can’t be removed
   **/
  deleteOrganizationsUuidMemberships(
    req: operations.DeleteOrganizationsUuidMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationsUuidMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationsUuidMembershipsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organization_memberships/{uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteOrganizationsUuidMembershipsResponse =
        new operations.DeleteOrganizationsUuidMembershipsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.DeleteOrganizationsUuidMembershipsErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getOrganizationMemberships - List Organization Memberships
   *
   * Use this to list the Organization Memberships for all users belonging to an organization, use:
   *
   * * `user` to look up a user's membership in an organization
   *
   * * `organization` to look up all users that belong to the organization
   *
   * This endpoint can also be used to retrieve your organization URI.
   **/
  getOrganizationMemberships(
    req: operations.GetOrganizationMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationMembershipsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/organization_memberships";

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationMembershipsResponse =
        new operations.GetOrganizationMembershipsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationMemberships200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrganizationMemberships200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetOrganizationMembershipsErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getOrganizationsOrgUuidInvitationsUuid - Get Organization Invitation
   *
   * Returns an Organization Invitation that was sent to the organization's members.
   **/
  getOrganizationsOrgUuidInvitationsUuid(
    req: operations.GetOrganizationsOrgUuidInvitationsUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsOrgUuidInvitationsUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationsOrgUuidInvitationsUuidRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{org_uuid}/invitations/{uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationsOrgUuidInvitationsUuidResponse =
        new operations.GetOrganizationsOrgUuidInvitationsUuidResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationsOrgUuidInvitationsUuid200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrganizationsOrgUuidInvitationsUuid200ApplicationJSON
              );
          }
          break;
        case [400, 401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetOrganizationsOrgUuidInvitationsUuidErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getOrganizationsUuidInvitations - List Organization Invitations
   *
   * Returns a list of Organization Invitations that were sent to the organization's members.
   **/
  getOrganizationsUuidInvitations(
    req: operations.GetOrganizationsUuidInvitationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsUuidInvitationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationsUuidInvitationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{uuid}/invitations",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationsUuidInvitationsResponse =
        new operations.GetOrganizationsUuidInvitationsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationsUuidInvitations200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrganizationsUuidInvitations200ApplicationJSON
              );
          }
          break;
        case [400, 401, 403, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetOrganizationsUuidInvitationsErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getOrganizationsUuidMemberships - Get Organization Membership
   *
   * Returns information about a user's Organization Membership
   **/
  getOrganizationsUuidMemberships(
    req: operations.GetOrganizationsUuidMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsUuidMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationsUuidMembershipsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organization_memberships/{uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationsUuidMembershipsResponse =
        new operations.GetOrganizationsUuidMembershipsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationsUuidMemberships200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrganizationsUuidMemberships200ApplicationJSON
              );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetOrganizationsUuidMembershipsErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postOrganizationsUuidInvitations - Invite User to Organization
   *
   *
   * Invites a user to an organization.
   **/
  postOrganizationsUuidInvitations(
    req: operations.PostOrganizationsUuidInvitationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrganizationsUuidInvitationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrganizationsUuidInvitationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{uuid}/invitations",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostOrganizationsUuidInvitationsResponse =
        new operations.PostOrganizationsUuidInvitationsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postOrganizationsUuidInvitations201ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostOrganizationsUuidInvitations201ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
        case [401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.PostOrganizationsUuidInvitationsErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postOrganizationsUuidInvitations403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostOrganizationsUuidInvitations403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * revokeUsersOrganizationInvitation - Revoke User's Organization Invitation
   *
   * Use this to revoke an Organization Invitation to an organization. Once revoked, the invitation link that was sent to the invitee is no longer valid.
   **/
  revokeUsersOrganizationInvitation(
    req: operations.RevokeUsersOrganizationInvitationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeUsersOrganizationInvitationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeUsersOrganizationInvitationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{org_uuid}/invitations/{uuid}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.RevokeUsersOrganizationInvitationResponse =
        new operations.RevokeUsersOrganizationInvitationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
        case [401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse1 = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.RevokeUsersOrganizationInvitationErrorResponse
            );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.revokeUsersOrganizationInvitation403ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.RevokeUsersOrganizationInvitation403ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
