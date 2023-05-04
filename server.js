require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = 8000;

const apiKey = process.env.OPENAI_API_KEY;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: req.body.message }],
      max_tokens: 100,
    })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});