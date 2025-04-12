const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Mock Server is running!',
    version: '1.0.0',
    endpoints: {
      '/api/users': 'GET - Get sample users',
      '/api/posts': 'GET - Get sample posts'
    }
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ]);
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Hello World', content: 'First post content', userId: 1 },
    { id: 2, title: 'Second Post', content: 'Another post here', userId: 2 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});