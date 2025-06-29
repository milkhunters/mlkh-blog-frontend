import fs from 'node:fs/promises'
import path from 'node:path'
import { generate } from 'openapi-typescript-codegen'

const CONFIG = {
  openApiSpecPath: path.resolve('./openapi.json'),
  outputDir: path.resolve('./src/shared/api/generated'),
  cleanUpSpec: true,
}

async function cleanupDirectory(dirPath) {
  try {
    await fs.rm(dirPath, { recursive: true, force: true })
    console.log(`✅ Directory "${dirPath}" removed successfully`)
  } catch (error) {
    console.error(`❌ Error cleaning directory "${dirPath}":`, error)
    throw error
  }
}

async function generateApiTypes() {
  try {
    console.log('🚀 Starting API types generation...')

    await generate({
      input: CONFIG.openApiSpecPath,
      output: CONFIG.outputDir,
      useUnionTypes: true,
      exportCore: false,
      exportServices: false,
    })

    console.log('🎉 API types generated successfully')

    if (CONFIG.cleanUpSpec) {
      try {
        await fs.unlink(CONFIG.openApiSpecPath)
        console.log(`🗑️ OpenAPI spec "${CONFIG.openApiSpecPath}" removed successfully`)
      } catch (error) {
        console.error(`⚠️ Failed to remove OpenAPI spec:`, error)
      }
    }
  } catch (error) {
    console.error('💥 API types generation failed:', error)
  }
}

async function main() {
  try {
    await cleanupDirectory(CONFIG.outputDir)
    await generateApiTypes()
  } catch (error) {
    console.error('🔴 Script execution failed:', error)
  }
}

main()
