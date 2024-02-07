import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const usefulFileNames = ['schema.graphql', 'type-defs.graphql'];

const findSchemas = (folder: string): string[] =>
  fs.readdirSync(folder, 'utf8').reduce((results: string[], name: string): string[] => {
    const fullPath = path.join(folder, name);
    if (name.endsWith('.graphql') && usefulFileNames.includes(name)) {
      return results.concat([fullPath]);
    }
    if (fs.statSync(fullPath).isDirectory()) {
      return results.concat(findSchemas(fullPath));
    }
    return results;
  }, []);

export default {
  findSchemas,
};

const schemas = findSchemas('src/state');

const schemasFile = 'apollo-schema-paths.config.js';
const fileEncodingOptions = { encoding: 'utf8' as const };

const contents = `/* this file is auto-generated. Use 'yarn gen:graphql' */

module.exports = [
${schemas.map((schema) => `  "${schema}",`).join('\n')}
];
`;

fs.writeFileSync(schemasFile, contents, fileEncodingOptions);

exec('yarn eslint:fix ./apollo-schema-paths.config.js');
