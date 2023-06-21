export interface OpenAIModel {
  id: string;
  name: string;
}

export enum OpenAIModelID {
  //GPT_3_5 = 'gpt-3.5-turbo',
  //GPT_3_5 = 'gpt-3.5-turbo-16k',
  GPT_3_5 = 'gpt-3.5-turbo-16k-0613',
  GPT_4 = 'gpt-4',
}

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'Default (GPT-3.5)',
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
  },
};
