"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
});

export const createAnswer = async (_: any, formData: FormData) => {};
