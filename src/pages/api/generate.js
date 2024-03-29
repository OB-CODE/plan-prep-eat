import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const selectedProtein = req.body.selectedProtein || '';
  const dietary = req.body.dietary || '';
  const pantryStaples = req.body.pantryStaples || '';

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(selectedProtein, dietary, pantryStaples),
      temperature: 0.6,
      max_tokens: 500,
    });

    console.log(completion.data)
    res.status(200).json({ result: completion.data.choices[0].text.trim()});

  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(protein, dietary, pantryEssentials) {
  return `Provide a recipe with ${protein} as the main ingredient for a ${dietary}. Optional ingredients ${pantryEssentials}. Output as JSON data: {"name": "", "ingredients": [], "method": []}`;
}