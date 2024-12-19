import { IntegrationDto } from "../chat/integration.dto";

export interface SendListRowDto {
    title: string,
    description: string,
    rowId: string
}

export interface SendListSectionDto {
    title: string,
    rows: SendListRowDto[],
}

export interface SendListDto {
    userId: string,
    integration: IntegrationDto,
    title: string,
    description: string,
    buttonText: string,
    footerText: string,
    sections: SendListSectionDto[],
}
