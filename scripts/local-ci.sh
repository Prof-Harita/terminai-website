#!/bin/bash
set -e

echo "🔍 Running Lint..."
npm run lint

echo "🔍 Running Typecheck..."
npm run typecheck

echo "🏗️  Running Build..."
rm -rf .next
npm run build

echo "📂 Copying static assets for standalone build..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "🧪 Running Smoke Tests (E2E)..."
# Set CI=true to use the standalone server build instead of dev server
# This mirrors the GitHub Actions environment more closely
CI=true npm run test:e2e

echo "✅ Local CI Passed!"
