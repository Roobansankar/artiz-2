# Artiz

Premium furniture concept storefront built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Zustand, React Hook Form, and Zod.

## Run

npm install
npm run dev

## Verify

npm run lint
npm run typecheck
npm run build

## Integration notes

The catalog is illustrative demo content. Cart and wishlist persist in browser local storage. Forms validate locally and explicitly disclose that no message/subscription/order is submitted. Checkout never collects payment details. Connect verified catalog data, inventory, shipping rules, a payment gateway, a newsletter service, and business/legal details before commercial launch.

Brand and photography configuration: lib/data.ts. Remote photographs are served from Unsplash. Product photography is illustrative and must be replaced by licensed, accurate SKU photography before launch. Google Fonts supplies Cormorant Garamond and Manrope with system fallbacks.

All required storefront routes are resolved through the App Router catch-all page, with unknown products, categories, and journal entries returning a 404. No secrets are required for the frontend demo.

## Validation

Browser smoke check: node qa.mjs (production server on 127.0.0.1:3001). Install Playwright Chromium with npx playwright install chromium, or set QA_CHROME_PATH to an existing Chromium executable. Checks cover six requested viewport widths, catalog filtering, product options, persistent cart/wishlist, quantity changes, required routes, 404 status, and JavaScript errors.

npm audit --omit=dev reports zero vulnerabilities. The full dependency audit currently reports five high-severity transitive development-tool advisories through eslint-config-next / braces; no patched compatible braces release is available. Recheck the lint dependency chain before CI processes untrusted patterns.

Photo sources include Unsplash and Pexels. Example Pexels source pages: https://www.pexels.com/photo/round-wooden-tables-and-decoration-in-a-vase-11507948/ and https://www.pexels.com/photo/ceramic-vase-and-books-on-wooden-table-6963769/.
