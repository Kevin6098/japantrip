#!/bin/bash
# Run this in Terminal.app (or iTerm) — NOT inside Cursor.
# Cursor times out when Git writes to .git/ — an external terminal does not.

set -e
cd "$(dirname "$0")"

echo "→ Committing 17 files..."
git commit -m "Carousel glass buttons, mobile Prev/Next pills, CarouselNav component, docs"

echo "→ Pushing to origin main..."
git push origin main

echo "Done."
