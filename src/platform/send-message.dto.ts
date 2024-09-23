import { BotDto } from "../assistant/bot.dto";

export interface SendMessageDto {
    userId: string,
    bot: BotDto,
    text: string,
    isQuoted: boolean,
    replyMessageId?: string,
    replyMessage?: string
}