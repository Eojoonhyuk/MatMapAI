import OpenAI from "openai";

export const prompt: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: "",
  },
];
