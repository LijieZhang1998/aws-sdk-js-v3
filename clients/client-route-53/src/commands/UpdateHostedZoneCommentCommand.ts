import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/models_0";
import {
  deserializeAws_restXmlUpdateHostedZoneCommentCommand,
  serializeAws_restXmlUpdateHostedZoneCommentCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface UpdateHostedZoneCommentCommandInput extends UpdateHostedZoneCommentRequest {}
export interface UpdateHostedZoneCommentCommandOutput extends UpdateHostedZoneCommentResponse, __MetadataBearer {}

/**
 * <p>Updates the comment for a specified hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateHostedZoneCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHostedZoneCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class UpdateHostedZoneCommentCommand extends $Command<
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHostedZoneCommentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateHostedZoneCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHostedZoneCommentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHostedZoneCommentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHostedZoneCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateHostedZoneCommentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHostedZoneCommentCommandOutput> {
    return deserializeAws_restXmlUpdateHostedZoneCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
