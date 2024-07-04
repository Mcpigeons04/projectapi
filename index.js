// index.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const NEWS_API_KEY = 'NEWS_API_KEY'; // Replace with your actual NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the News API');
});

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: { apiKey: NEWS_API_KEY, language: 'en' },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.get('/news/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: { apiKey: NEWS_API_KEY, language: 'en', category },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.get('/news/country/:country', async (req, res) => {
  const country = req.params.country;
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: { apiKey: NEWS_API_KEY, language: 'en', country },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.get('/news/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: { apiKey: NEWS_API_KEY, q: query, language: 'en' },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
