import { MessageLangDto } from "../assistant";
import { BotDto } from "../assistant/bot.dto";
import { ThreadDto } from "../assistant/thread.dto";

export interface RunDto {
    aiKey: string;
    assistantId: string;
    bot: BotDto;
    thread: ThreadDto;
    lang: MessageLangDto;
}
