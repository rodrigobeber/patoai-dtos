import { IntegrationDto } from "../chat/integration.dto";

export interface SendContactDto {
    userId: string,
    integration: IntegrationDto,
    fullName: string,
    wuid: string,
    organization?: string,
    email?: string,
    url?: string,
}
