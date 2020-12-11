export default {
    github: 'https://github.com/grizzlybots11918/updates',     // link of the project repo
    siteGithub: 'https://github.com/grizzlybots11918/updates', // link of the docs repo path
    titleSuffix: ' – Grizzly Bots',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null,                              // <- customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: 'MIT 2020 © Grizzly Bots 11918',
    footerEditOnGitHubLink: true,                    // will link to the docs repo
    logo: (
      <Logo/>
    ),head: (
      <React.Fragment>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="See updates for FTC team 11918, Grizzly Bots." />
        <meta name="og:description" content="See updates for FTC team 11918, Grizzly Bots." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GlennHSRobotics" />
        <meta name="og:title" content="See updates for FTC team 11918, Grizzly Bots." />
        <meta name="apple-mobile-web-app-title" content="Grizzly Bots Team Updates" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </React.Fragment>
    )
  }

  function Logo() {
    return (
      <span>
    <span className="mr-2 font-extrabold hidden md:inline">Grizzly Bots</span>
    <span className="text-gray-600 font-normal hidden md:inline">
      Team Updates
    </span>
    </span>
    )
  }
