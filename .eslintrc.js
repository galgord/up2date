module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/unique-enum-value-names': 'error',
        '@graphql-eslint/alphabetize': ['error', { values: ['EnumTypeDefinition'] }],
        '@graphql-eslint/unique-type-names': 'error',
        '@graphql-eslint/no-duplicate-fields': 'error',
        '@graphql-eslint/unique-field-definition-names': 'error',
        '@graphql-eslint/unique-input-field-names': 'error',
        '@graphql-eslint/unique-operation-name': 'error',
        '@graphql-eslint/unique-variable-names': 'error',
        '@graphql-eslint/no-unused-fields': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            types: 'PascalCase',
            FieldDefinition: 'camelCase',
            EnumValueDefinition: 'UPPER_CASE',
            InputValueDefinition: 'camelCase',
          },
        ],
        '@graphql-eslint/no-anonymous-operations': 'error',
        'prettier/prettier': 'error',
      },
      parserOptions: {
        skipGraphQLConfig: true,
        schema: './src/state/graphql.schema.json',
        documents: './src/**/*.{tsx,ts}',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'], // TODO: Renable this later
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-cycle': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '^react-native',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '^@react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'ignore',
      },
    ],
    'import/no-named-as-default': 0,
    'sort-keys': 0,
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'], // relative imports are allowed only up two one directory above the current
      },
    ],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
  },
};
