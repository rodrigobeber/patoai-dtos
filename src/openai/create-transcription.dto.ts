import { Uploadable } from 'openai/uploads';

export interface CreateTranscriptionDto {
  aiKey: string;
  file: Uploadable;
  language: string;
}
