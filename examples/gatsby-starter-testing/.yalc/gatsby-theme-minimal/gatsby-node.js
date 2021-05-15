exports.onPreInit = ({ reporter }, themeOptions) => {
  reporter.info(
    `Logging to the console from "packages/gatsby-theme-minimal" with themeOptions:`
  )
  reporter.info(JSON.stringify(themeOptions, null, " "))
}
