import { ReplyMessageDto } from "./reply-message.dto";

export interface RouteDto {
    idAgent: number;
    assistantId: string;
    replyMessage: ReplyMessageDto
}