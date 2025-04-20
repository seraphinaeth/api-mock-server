const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const configPath = path.join(__dirname, 'config.json');
let config;

try {
  const configData = fs.readFileSync(configPath, 'utf8');
  config = JSON.parse(configData);
} catch (error) {
  console.error('Error loading config:', error);
  process.exit(1);
}

const PORT = process.env.PORT || config.server.port;

if (config.server.cors) {
  app.use(cors());
}
app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
  const endpoints = {};
  config.endpoints.forEach(endpoint => {
    endpoints[endpoint.path] = `${endpoint.method} - Mock endpoint`;
  });
  
  res.json({
    message: 'API Mock Server is running!',
    version: '1.0.0',
    endpoints
  });
});

config.endpoints.forEach(endpoint => {
  const method = endpoint.method.toLowerCase();
  app[method](endpoint.path, (req, res) => {
    const delay = endpoint.delay || config.server.delay || 0;
    
    setTimeout(() => {
      res.status(endpoint.response.status).json(endpoint.response.data);
    }, delay);
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
  console.log(`Loaded ${config.endpoints.length} endpoints from config`);
});