module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.setUseGitIgnore(false);
}