module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('assets')

    return {

        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
            include: "includes"
        }

    }

}