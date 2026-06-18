#!/usr/bin/env bash
# Generate a portfolio cover thumbnail from a PDF's first page.
# Usage:  ./make-cover.sh portfolio/my-new-project.pdf
# Output: assets/covers/my-new-project.jpg
#
# Requires: poppler (pdftoppm) and macOS sips.
#   brew install poppler

set -euo pipefail

pdf="${1:?Usage: ./make-cover.sh portfolio/<file>.pdf}"
name="$(basename "${pdf%.*}")"
mkdir -p assets/covers

tmp="$(mktemp -t cover)"
pdftoppm -f 1 -l 1 -r 80 -png "$pdf" "$tmp" >/dev/null
src="${tmp}-1.png"; [ -f "${tmp}-01.png" ] && src="${tmp}-01.png"

sips -s format jpeg -s formatOptions 72 --resampleWidth 600 \
     "$src" --out "assets/covers/${name}.jpg" >/dev/null

rm -f "${tmp}"*
echo "✓ assets/covers/${name}.jpg"
echo "Now set  cover: \"assets/covers/${name}.jpg\"  in portfolio.js"
