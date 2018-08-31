#!/bin/bash
npx prettier --list-different --single-quote --no-bracket-spacing './src/**/*.{js,ts,tsx,gql,graphql}'
EXIT_CODE=${?}
if [ ${EXIT_CODE} -ne 0 ]; then
  echo "🔥 Prettier detected that some files are not formatted"
  echo "Exec \"npm run prettier\" to format the files."
  exit 1
else
  echo "✅ Files are properly formatted"
fi
