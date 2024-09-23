import { BotDto } from "../assistant/bot.dto";

export interface SendTypingDto {
    userId: string;
    bot: BotDto;
}