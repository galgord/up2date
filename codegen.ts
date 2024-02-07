import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';
import * as dotenv from 'dotenv';
import localSchemaFiles from './apollo-schema-paths.config.js';

const path = require('path');
dotenv.config({ path: path.join(__dirname, `./.env`) });

const config: CodegenConfig = {
  schema: [
    `${process.env.API_URL}/graphql/${process.env.API_VERSION}`, // Using the local endpoint, update if needed
    ...localSchemaFiles,
  ],
  documents: 'src/**/*.tsx',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    './__generated__/global-types.ts': {
      plugins: [
        '@graphql-codegen/typescript',
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/array-type */',
          },
        },
      ],
      config: {
        dedupeOperationSuffix: true,
        immutableTypes: true,
        namingConvention: {
          default: 'change-case#pascalCase',
          enumValues: 'change-case#upperCase',
        },
      },
      hooks: {
        afterOneFileWrite: 'bun prettier --write',
      },
    },
    'src/': {
      preset: 'near-operation-file',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      documents: 'src/**/*.graphql',
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        baseTypesPath: '/../__generated__/global-types.ts',
        folder: '__generated__',
      },
      config: {
        useTypeImports: true,
        hooksSuffix: '',
        operationResultSuffix: 'Result',
        skipTypename: false,
        avoidOptionals: true,
        withHooks: true,
        enumsAsTypes: true,
        reactApolloVersion: 3,
        dedupeOperationSuffix: true,
        immutableTypes: true,
        declarationKind: 'interface',
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
    './src/state/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterAllFileWrite: ['bun prettier -w'], // optional
  },
};

export default config;
