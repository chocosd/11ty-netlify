const { DateTime } = require("luxon")

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("css")

    eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED))

}