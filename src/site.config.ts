import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'SRLEOM',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Arjit Sharma Portfolio',
	// Meta property used as the default description meta property
	description: 'Portfolio of Software Developer Arjit Sharma',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Projects',
		path: '/projects/'
	},
	{
		title: 'About',
		path: '/about/'
	},
	{
		title: 'Experience',
		path: '/experience/'
	},
	{
		title: 'Technologies',
		path: '/technologies/'
	},
	{
		title: 'Things I Care About',
		path: '/things-i-care-about/'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}

// Portfolio specific configuration
export const portfolioConfig = {
	// Core development technologies
	coreTechnologies: [
		{ name: 'JavaScript', icon: 'logos:javascript' },
		{ name: 'React', icon: 'logos:react' },
		{ name: 'Node.js', icon: 'logos:nodejs-icon' },
		{ name: 'Express.js', icon: 'simple-icons:express' },
		{ name: 'PostgreSQL', icon: 'logos:postgresql' },
		{ name: 'MongoDB', icon: 'logos:mongodb-icon' }
	],
	// Technologies I'm familiar with
	secondaryTechnologies: [
		{ name: 'AWS', icon: 'simple-icons:amazonaws' },
		{ name: 'Docker', icon: 'simple-icons:docker' },
		{ name: 'GitHub', icon: 'simple-icons:github' },
		{ name: 'NPM', icon: 'simple-icons:npm' },
		{ name: 'Figma', icon: 'simple-icons:figma' },
		{ name: 'ChatGPT', icon: 'simple-icons:openai' }
	],
	// Other technologies and interests
	otherTechnologies: [
		{ name: 'Java', icon: 'logos:java' },
		{ name: 'Distributed Systems' },
		{ name: 'System Design' },
		{ name: 'Data Structures & Algorithms' },
		{ name: 'Computer Networks' },
		{ name: 'Operating Systems' },
		{ name: 'Databases' }
	]
}
