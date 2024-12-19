import { IntegrationDto } from "../chat/integration.dto";

export interface SendMessageDto {
    userId: string,
    integration: IntegrationDto,
    text: string,
    isQuoted: boolean,
    replyMessageId?: string,
    replyMessage?: string
}