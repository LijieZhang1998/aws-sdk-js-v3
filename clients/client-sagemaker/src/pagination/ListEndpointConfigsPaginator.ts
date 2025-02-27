import { Paginator } from "@aws-sdk/types";

import {
  ListEndpointConfigsCommand,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "../commands/ListEndpointConfigsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListEndpointConfigsCommandInput,
  ...args: any
): Promise<ListEndpointConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListEndpointConfigsCommandInput,
  ...args: any
): Promise<ListEndpointConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpointConfigs(input, ...args);
};
export async function* paginateListEndpointConfigs(
  config: SageMakerPaginationConfiguration,
  input: ListEndpointConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
