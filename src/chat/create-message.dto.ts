export interface CreateMessageDto {
    idThread: number;
    content: string;
    chatMessageId: string;
    messageId: string;
    role: string;
    idAgent: number;
}