import { AssistantTool } from "openai/resources/beta/assistants";

export interface SyncAssistantDto {
    assistantId?: string;
    aiKey: string;
    model: string;
    name: string;
    description: string;
    instructions: string;
    temperature: number;
    tools: AssistantTool[];
}