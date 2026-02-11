import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'
import expressiveCode from 'astro-expressive-code'
import { expressiveCodeOptions } from './src/site.config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://arjit-32.github.io',
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: true // Re-enabling base styles for consistent typography
    }),
    sitemap(),
    mdx(),
    icon()
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer']
        }
      ]
    ]
  },
  prefetch: true,
  output: 'static'
})
