import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'https://spacecityhomecleaning.com',
	// Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	sitemap: false,
	// Generate sitemap (set to "false" to disable)
	integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
	output: 'server',
	adapter: netlify(),
});

