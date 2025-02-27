import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListPhoneNumberOrdersCommandInput,
  ...args: any
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumberOrdersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListPhoneNumberOrdersCommandInput,
  ...args: any
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumberOrders(input, ...args);
};
export async function* paginateListPhoneNumberOrders(
  config: ChimePaginationConfiguration,
  input: ListPhoneNumberOrdersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumberOrdersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPhoneNumberOrdersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
