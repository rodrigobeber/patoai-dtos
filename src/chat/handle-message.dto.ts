import { MessageInDto } from "./message-in.dto";

export interface HandleMessageDto {
    crewCode: string;
    method: string;
    messageIn: MessageInDto;
}