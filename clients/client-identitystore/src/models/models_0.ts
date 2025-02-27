import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The identifier for each request. This value is a globally unique ID that is generated by the Identity Store service for each sent request, and is then returned inside the exception if the request fails.</p>
   */
  RequestId?: string;
}

export interface DescribeGroupRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as
   *          <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and
   *             <code>1234567890</code> is a randomly generated string that contains number and lower
   *          case letters. This value is generated at the time that a new identity store is
   *          created.</p>
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   */
  GroupId: string | undefined;
}

export namespace DescribeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeGroupResponse {
  /**
   * <p>The identifier for a group in the identity store.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>Contains the group’s display name value. The length limit is 1,024 characters. This
   *          value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new
   *          line, carriage return, space, and nonbreaking space in this attribute. The characters
   *             <code><>;:%</code> are excluded. This value is specified at the time that the
   *          group is created and stored as an attribute of the group object in the identity
   *          store.</p>
   */
  DisplayName: string | undefined;
}

export namespace DescribeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
  /**
   * <p>The identifier for each request. This value is a globally unique ID that is generated by the Identity Store service for each sent request, and is then returned inside the exception if the request fails.</p>
   */
  RequestId?: string;
}

export enum ResourceType {
  GROUP = "GROUP",
  IDENTITY_STORE = "IDENTITY_STORE",
  USER = "USER",
}

/**
 * <p>Indicates that a requested resource is not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The type of resource in the Identity Store service, which is an enum object. Valid values include USER, GROUP, and IDENTITY_STORE.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The identifier for a resource in the identity store, which can be used as <code>UserId</code> or <code>GroupId</code>. The format for <code>ResourceId</code> is either <code>UUID</code> or <code>1234567890-UUID</code>, where <code>UUID</code> is a randomly generated value for each resource when it is created and <code>1234567890</code> represents the <code>IdentityStoreId</code> string value. In the case that the identity store is migrated from a legacy SSO identity store, the <code>ResourceId</code> for that identity store will be in the format of <code>UUID</code>. Otherwise, it will be in the <code>1234567890-UUID</code> format.</p>
   */
  ResourceId?: string;

  Message?: string;
  /**
   * <p>The identifier for each request. This value is a globally unique ID that is generated by the Identity Store service for each sent request, and is then returned inside the exception if the request fails.</p>
   */
  RequestId?: string;
}

/**
 * <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The identifier for each request. This value is a globally unique ID that is generated by the Identity Store service for each sent request, and is then returned inside the exception if the request fails.</p>
   */
  RequestId?: string;
}

/**
 * <p>The request failed because it contains a syntax error.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The identifier for each request. This value is a globally unique ID that is generated by the Identity Store service for each sent request, and is then returned inside the exception if the request fails.</p>
   */
  RequestId?: string;
}

export interface DescribeUserRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as
   *          <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and
   *             <code>1234567890</code> is a randomly generated string that contains number and lower
   *          case letters. This value is generated at the time that a new identity store is
   *          created.</p>
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   */
  UserId: string | undefined;
}

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>Contains the user’s user name value. The length limit is 128 characters. This value can
   *          consist of letters, accented characters, symbols, numbers, and punctuation. The characters
   *             <code><>;:%</code> are excluded. This value is specified at the time the user is
   *          created and stored as an attribute of the user object in the identity store.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   */
  UserId: string | undefined;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

/**
 * <p>A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to
 *          search users or groups.</p>
 */
export interface Filter {
  /**
   * <p>The attribute path that is used to specify which attribute name to search. Length limit
   *          is 255 characters. For example, <code>UserName</code> is a valid attribute path for the
   *             <code>ListUsers</code> API, and <code>DisplayName</code> is a valid attribute path for
   *          the <code>ListGroups</code> API.</p>
   */
  AttributePath: string | undefined;

  /**
   * <p>Represents the data for an attribute. Each attribute value is described as a name-value pair. </p>
   */
  AttributeValue: string | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
    ...(obj.AttributeValue && { AttributeValue: SENSITIVE_STRING }),
  });
}

export interface ListGroupsRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as
   *          <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and
   *             <code>1234567890</code> is a randomly generated string that contains number and lower
   *          case letters. This value is generated at the time that a new identity store is
   *          created.</p>
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in the
   *             <code>ListUsers</code> and <code>ListGroups</code> request to specify how many results
   *          to return in one page. The length limit is 50 characters.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API
   *          operations. This value is generated by the identity store service. It is returned in the
   *          API response if the total results are more than the size of one page. This token is also
   *          returned when it is used in the API request to search for the next page.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code>ListGroups</code> request. </p>
   */
  Filters?: Filter[];
}

export namespace ListGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
    ...(obj.Filters && { Filters: obj.Filters.map((item) => Filter.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A group object, which contains a specified group’s metadata and attributes.</p>
 */
export interface Group {
  /**
   * <p>The identifier for a group in the identity store.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>Contains the group’s display name value. The length limit is 1,024 characters. This
   *          value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new
   *          line, carriage return, space, and nonbreaking space in this attribute. The characters
   *             <code><>;:%</code> are excluded. This value is specified at the time the group
   *          is created and stored as an attribute of the group object in the identity store.</p>
   */
  DisplayName: string | undefined;
}

export namespace Group {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

export interface ListGroupsResponse {
  /**
   * <p>A list of <code>Group</code> objects in the identity store.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API
   *          operations. This value is generated by the identity store service. It is returned in the
   *          API response if the total results are more than the size of one page. This token is also
   *          returned when it1 is used in the API request to search for the next page.</p>
   */
  NextToken?: string;
}

export namespace ListGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as
   *          <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and
   *             <code>1234567890</code> is a randomly generated string that contains number and lower
   *          case letters. This value is generated at the time that a new identity store is
   *          created.</p>
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in the
   *             <code>ListUsers</code> and <code>ListGroups</code> request to specify how many results
   *          to return in one page. The length limit is 50 characters.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API
   *          operations. This value is generated by the identity store service. It is returned in the
   *          API response if the total results are more than the size of one page. This token is also
   *          returned when it is used in the API request to search for the next page.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code>ListGroups</code> request. </p>
   */
  Filters?: Filter[];
}

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
    ...(obj.Filters && { Filters: obj.Filters.map((item) => Filter.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A user object, which contains a specified user’s metadata and attributes.</p>
 */
export interface User {
  /**
   * <p>Contains the user’s user name value. The length limit is 128 characters. This value can
   *          consist of letters, accented characters, symbols, numbers, and punctuation. The characters
   *             <code><>;:%</code> are excluded. This value is specified at the time the user is
   *          created and stored as an attribute of the user object in the identity store.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   */
  UserId: string | undefined;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface ListUsersResponse {
  /**
   * <p>A list of <code>User</code> objects in the identity store.</p>
   */
  Users: User[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API
   *          operations. This value is generated by the identity store service. It is returned in the
   *          API response if the total results are more than the size of one page. This token is also
   *          returned when it is used in the API request to search for the next page.</p>
   */
  NextToken?: string;
}

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
  });
}
