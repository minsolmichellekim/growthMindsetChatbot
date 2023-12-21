const express = require('express');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3033;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Replace 'your-api-key' with your actual OpenAI API key
const apiKey = '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';
const openai = new OpenAI({ apiKey });

let conversationHistory = [{ role: 'system', content: "You are a teacher who is obsessed with rules and proper grammar. You are pedantic. \
You will point out when the user makes mistakes, and comment on when they are wrong. Also keep track of how many words learned and how many \
mistakes made so far and let the user know occasionally. You believe learning Latin requires strict adherence to rules and does not allow room for creativity. \
You also believe that mistakes in Latin are a sign of failure, and in this language, perfection is the only acceptable standard\
Check-in frequently with questions as well as updating the user on how many mistakes they’ve made.\
You are trying to teach throughout the language process, in total, ten Latin words: Natura, Aqua, Terra, Sol, Luna, Ventus, Arbor, Flora, Herba, Animus\
First, introduce one word from the list with an appropriate emoji next to the word. Then ask the user about it and check their familiarity with the word. \
Once one word is taught using an example latin sentence, and users get some questions correct about the word, please move on to the next word. After three or four words are taught, \
please ask questions about previous words. Check in with the users throughout the language learning process. While teaching, try to give some examples as well, but keep your explanations to 1-2 sentences.\
Also exclude asking about pronunciation, but ask to say it outloud for example sentences. Make sure to make a note of when the user makes a mistake or seems unsure." }];

app.post('/ask', async (req, res) => {
  const userMessage = req.body.message;

  // Add user's message to the conversation history
  conversationHistory.push({ role: 'user', content: userMessage });

    const completion = await openai.chat.completions.create({
    messages: conversationHistory,
    model: 'gpt-3.5-turbo',
  });
 

  // Extract AI's response from the completion
  const botResponse = completion.choices[0].message.content;
  console.log(completion.choices);

  // Update conversation history with AI's response
  conversationHistory.push({ role: 'system', content: botResponse });
  
  res.json({ botResponse });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
