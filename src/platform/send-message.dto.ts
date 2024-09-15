export interface SendMessageDto {
    userId: string,
    botKey: string,
    text: string,
    isQuoted: boolean,
    replyMessageId?: string,
    replyMessage?: string
}