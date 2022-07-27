type NavbarOption = {
    'aria-label': string;
    href: string,
    innerText: string;
}

export const NAVBAR_OPTIONS: NavbarOption[] = [
    {
        'aria-label': 'Go to Cypress "Features" page',
        href: '/features',
        innerText: 'Features'
    },
    {
        'aria-label': 'Go to Cypress "How it works" page',
        href: '/how-it-works',
        innerText: 'How it works'
    },
    {
        'aria-label': 'Go to Cypress "Dashboard" page',
        href: '/dashboard',
        innerText: 'Dashboard'
    },
    {
        'aria-label': 'Go to Cypress "Pricing" page',
        href: '/pricing',
        innerText: 'Pricing'
    },
    {
        'aria-label': 'Go to Cypress "Support" page',
        href: '/support',
        innerText: 'Support'
    },
    {
        'aria-label': 'Go to Cypress "Blog" page',
        href: 'https://www.cypress.io/blog/',
        innerText: 'Blog'
    },
    {
        'aria-label': 'Go to Cypress "Docs" page',
        href: 'https://docs.cypress.io',
        innerText: 'Docs'
    },
    {
        'aria-label': 'Go to Cypress "What\'s New" page',
        href: 'https://docs.cypress.io/guides/references/changelog',
        innerText: 'What\'s New'
    },
    {
        'aria-label': 'Go to Cypress "Login" page',
        href: 'https://dashboard.cypress.io/login',
        innerText: 'Login'
    },
    {
        'aria-label': 'Login in your Cypress account',
        href: 'https://dashboard.cypress.io/signup',
        innerText: 'Sign up'
    },
    {
        'aria-label': 'Check out our github page',
        href: 'https://github.com/cypress-io/cypress',
        innerText: ''
    }
]
