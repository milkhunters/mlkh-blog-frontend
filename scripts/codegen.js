import fs from 'node:fs'
import { generate } from 'openapi-typescript-codegen'

const GENERATED_DIR_PATH = './src/shared/api/generated'

fs.rmSync(GENERATED_DIR_PATH, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Error deleting directory:', err)
    return
  }
  console.log(`Directory "${GENERATED_DIR_PATH}" removed successfully.`)
})

generate({
  input: './openapi.json',
  output: './src/shared/api/generated',
  useUnionTypes: true,
  exportCore: false,
  exportServices: false,
})
