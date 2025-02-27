import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudFormationClient } from "../CloudFormationClient";
import { DescribeStacksCommand, DescribeStacksCommandInput } from "../commands/DescribeStacksCommand";

const checkState = async (client: CloudFormationClient, input: DescribeStacksCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeStacksCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Stacks);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StackStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "UPDATE_COMPLETE";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Stacks);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StackStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "UPDATE_FAILED") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Stacks);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StackStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "UPDATE_ROLLBACK_FAILED") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Stacks);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StackStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "UPDATE_ROLLBACK_COMPLETE") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationError") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until stack status is UPDATE_COMPLETE.
 *  @deprecated Use waitUntilStackUpdateComplete instead. waitForStackUpdateComplete does not throw error in non-success cases.
 */
export const waitForStackUpdateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStacksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until stack status is UPDATE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStacksCommand for polling.
 */
export const waitUntilStackUpdateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStacksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
