export enum MessageInTypeDto {
    TEXT = 'text',
    VOICE = 'voice',
}

export enum MessageLangDto {
    PT = 'pt',
    EN = 'en'
}

export interface MessageInDto {
    userId: string;
    lang: MessageLangDto;
    userName: string;
    type: MessageInTypeDto;
    chatMessageId: string;
    text: string;
    isNewChat: boolean,
    idAudio?: string;
}