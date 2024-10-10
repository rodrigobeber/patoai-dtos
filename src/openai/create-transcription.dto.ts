import { AudioFileDto } from '../platform';

export interface CreateTranscriptionDto {
    aiKey: string;
    file: AudioFileDto;
    language: string;
}
