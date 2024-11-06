import { BotDto } from "../assistant/bot.dto";

export interface SendContactDto {
    userId: string,
    bot: BotDto,
    fullName: string,
    wuid: string,
    organization?: string,
    email?: string,
    url?: string,
}
