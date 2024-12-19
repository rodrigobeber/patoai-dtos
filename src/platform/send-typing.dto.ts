import { IntegrationDto } from "../chat/integration.dto";

export interface SendTypingDto {
    userId: string;
    integration: IntegrationDto;
}