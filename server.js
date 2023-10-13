const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

const wss = new WebSocket.Server({ server });

// Здесь храним соответствие ключевых слов с URL
const keywords = {
  'food': ['http://example.com/food'],
  'news': ['http://example.com/news', 'http://example.com/news2'],
};

app.use(express.static('public'));

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (keywords.hasOwnProperty(message)) {
      ws.send(JSON.stringify(keywords[message]));
    } else {
      ws.send('Ключевое слово не найдено');
    }
  });
});
