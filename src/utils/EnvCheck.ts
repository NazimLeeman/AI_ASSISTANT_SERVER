import dotenv from 'dotenv';
import Logger from './Logger';

dotenv.config();

export function checkEnvironmentVariables() {
  const {
    OPENAI_API_KEY,
    LANGCHAIN_API_KEY,
    GROQ_API_KEY,
    ANTHROPIC_API_KEY
  } = process.env;

  const missingApiKeys: string[] = [];

  if (!OPENAI_API_KEY) missingApiKeys.push('OPENAI_API_KEY');
  if (!GROQ_API_KEY) missingApiKeys.push('GROQ_API_KEY');
  if (!ANTHROPIC_API_KEY) missingApiKeys.push('ANTHROPIC_API_KEY');

  if (missingApiKeys.length == 3 ) {
    throw new Error(
      'All API keys (OPENAI_API_KEY, GROQ_API_KEY, ANTHROPIC_API_KEY) are missing. Please provide at least one API key.',
    );
  } else if (missingApiKeys.length > 0) {
    Logger.warn(`Warning: The following API keys are missing: ${missingApiKeys.join(', ')}`);
  }

  if (!LANGCHAIN_API_KEY) {
    Logger.warn('Warning: The LANGCHAIN_API_KEY environment variable is not set. LangChain API activity logging will be disabled.');
  }
}