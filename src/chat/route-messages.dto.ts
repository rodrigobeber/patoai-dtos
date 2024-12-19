import { ThreadDto } from "./thread.dto";

export interface RouteMessagesDto {
    idCrew: number;
    aiKey: string;
    thread: ThreadDto
}