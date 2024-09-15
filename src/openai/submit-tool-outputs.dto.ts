import { RunSubmitToolOutputsParams } from 'openai/resources/beta/threads/runs/runs';

export interface SubmitToolOutputsDto {
  aiKey: string;
  threadId: string;
  runId: string;
  tool_outputs: RunSubmitToolOutputsParams.ToolOutput[];
}
