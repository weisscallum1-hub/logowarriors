# Logo Warriors

Fast, static brand website: HTML, CSS, JavaScript and editable JSON. No framework or build command is required.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages. Use `main` as the production branch, leave the build command blank, and set the build output directory to `/`. Preview deployments can be enabled for pull requests. Once the site is reviewed and merged, add `logowarriors.com` and `www.logowarriors.com` as custom domains in Pages and follow Cloudflare's DNS prompts. Keep the domain's authoritative DNS setup consistent with Cloudflare's instructions.

## Update the site

Edit `content.json` to change collection, brokerage, app, and contact details. Current cards are launch placeholders and must not be presented as confirmed products or sale listings. Replace them with verified details and add live outbound URLs when available. The contact address should be set up before launch.

## Launch checklist

- Confirm `hello@logowarriors.com` receives mail.
- Replace starter collections and app roadmap with actual offers, images, and Google Play URLs as they become available.
- Confirm each brokerage listing's availability, permission to market, and disclosure language before publication.
- Review privacy and terms pages against the legal entity, data collection practices, jurisdiction, and service providers.
- Connect Pages, attach both domain variants, and verify HTTPS and redirects.
- Add social profiles and Search Console ownership after DNS is live.

Google Fonts is used for the intended typography with local system fallbacks. The privacy page discloses this request. Remove the Google Fonts import in `index.html` if you prefer local-only fonts.
