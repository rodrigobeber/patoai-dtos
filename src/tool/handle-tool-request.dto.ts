import { Run } from "openai/resources/beta/threads/runs/runs";

export interface HandleToolRequestDto {
    aiKey: string;
    idAssistant: number;
    run: Run;
}
