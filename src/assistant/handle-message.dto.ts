import { MessageInDto } from "./message-in.dto";

export interface HandleMessageDto {
    assistantCode: string;
    method: string;
    messageIn: MessageInDto;
}