import { MessageLangDto } from "../chat";
import { IntegrationDto } from "../chat/integration.dto";
import { ThreadDto } from "../chat/thread.dto";

export interface RunDto {
    idCrew: number;
    aiKey: string;
    integration: IntegrationDto;
    thread: ThreadDto;
    lang: MessageLangDto;
}
