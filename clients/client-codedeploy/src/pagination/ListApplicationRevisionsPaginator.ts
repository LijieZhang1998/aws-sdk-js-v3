import { Paginator } from "@aws-sdk/types";

import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListApplicationRevisionsCommand,
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "../commands/ListApplicationRevisionsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListApplicationRevisionsCommandInput,
  ...args: any
): Promise<ListApplicationRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationRevisionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListApplicationRevisionsCommandInput,
  ...args: any
): Promise<ListApplicationRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.listApplicationRevisions(input, ...args);
};
export async function* paginateListApplicationRevisions(
  config: CodeDeployPaginationConfiguration,
  input: ListApplicationRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationRevisionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationRevisionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
