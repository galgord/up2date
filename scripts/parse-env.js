const fs = require('fs');

// Function to parse .env file and return an object of keys
const parseEnvFile = (filePath) => {
  const env = {};
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  fileContent.split('\n').forEach((line) => {
    const [key] = line.split('=');
    if (key?.trim()) {
      // @ts-ignore
      env[key.trim()] = true;
    }
  });
  return Object.keys(env);
};

module.exports = parseEnvFile;
