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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationPartIds, ImportDocumentationPartsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ImportDocumentationPartsCommand,
  serializeAws_restJson1ImportDocumentationPartsCommand,
} from "../protocols/Aws_restJson1";

export interface ImportDocumentationPartsCommandInput extends ImportDocumentationPartsRequest {}
export interface ImportDocumentationPartsCommandOutput extends DocumentationPartIds, __MetadataBearer {}

export class ImportDocumentationPartsCommand extends $Command<
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportDocumentationPartsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "ImportDocumentationPartsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportDocumentationPartsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPartIds.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportDocumentationPartsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportDocumentationPartsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportDocumentationPartsCommandOutput> {
    return deserializeAws_restJson1ImportDocumentationPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
