import { BotDto } from "../assistant/bot.dto";

export interface SendListRowDto {
    title: string,
    description: string,
    rowId: string
}

export interface SendListSectionDto {
    title: string,
    rows: SendListRowDto[],
}

export interface SendListDto {
    userId: string,
    bot: BotDto,
    title: string,
    description: string,
    buttonText: string,
    footerText: string,
    sections: SendListSectionDto[],
}
