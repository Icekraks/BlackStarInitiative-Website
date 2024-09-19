import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/index.ts',
  outputPath: '../app/src/types/schema.ts',
};

export default config;