console.log('about page...')
const about = async (ctx) => {
  await ctx.render('/about', {
    title: 'About'
  })
}

export default about;
