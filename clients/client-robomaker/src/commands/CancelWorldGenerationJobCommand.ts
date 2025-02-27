import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelWorldGenerationJobRequest, CancelWorldGenerationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelWorldGenerationJobCommand,
  serializeAws_restJson1CancelWorldGenerationJobCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface CancelWorldGenerationJobCommandInput extends CancelWorldGenerationJobRequest {}
export interface CancelWorldGenerationJobCommandOutput extends CancelWorldGenerationJobResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified world generator job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CancelWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class CancelWorldGenerationJobCommand extends $Command<
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelWorldGenerationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelWorldGenerationJobCommandInput, CancelWorldGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CancelWorldGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelWorldGenerationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelWorldGenerationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelWorldGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelWorldGenerationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelWorldGenerationJobCommandOutput> {
    return deserializeAws_restJson1CancelWorldGenerationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
