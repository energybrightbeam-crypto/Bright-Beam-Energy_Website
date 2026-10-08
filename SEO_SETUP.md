# Search visibility setup

The site already generates `/robots.txt` and `/sitemap.xml` from the app routes. Before production launch:

1. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS domain in the hosting environment before building. Do not use the localhost value from `.env.local` for production; canonical URLs, Open Graph URLs, structured data and the sitemap are based on this setting.
2. Deploy, then confirm that `/robots.txt`, `/sitemap.xml`, the browser icon, and each canonical URL load on the public domain.
3. Verify the domain in Google Search Console and Bing Webmaster Tools, then submit the sitemap and review indexing or crawl errors.
4. Keep the website's business name, phone, exact address, service areas and social profiles consistent with the real business listings. Add address schema only after confirming the exact public address.
5. Keep service-area pages useful and genuinely specific. Add first-hand project examples, original installation photos and verified local details as they become available; avoid publishing thin pages just to target more place names.

## AEO and generative search

Answer-oriented visibility uses the same foundations as search visibility: pages that can be crawled, clear headings, direct answers, reliable local facts and useful original content. The site exposes service and business details with structured data and includes the relevant answer content in each page. No ranking or AI citation can be guaranteed by metadata or a text file alone.
