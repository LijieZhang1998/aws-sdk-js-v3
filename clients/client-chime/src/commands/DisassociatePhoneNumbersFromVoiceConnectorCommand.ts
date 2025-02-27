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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DisassociatePhoneNumbersFromVoiceConnectorRequest,
  DisassociatePhoneNumbersFromVoiceConnectorResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand,
  serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociatePhoneNumbersFromVoiceConnectorCommandInput
  extends DisassociatePhoneNumbersFromVoiceConnectorRequest {}
export interface DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
  extends DisassociatePhoneNumbersFromVoiceConnectorResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DisassociatePhoneNumbersFromVoiceConnectorCommand extends $Command<
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DisassociatePhoneNumbersFromVoiceConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> {
    return deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
