const PORT = 8000;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/completions', (req, res) => {
  try {
    res.json({ msg: 'This is the text completions route' });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});