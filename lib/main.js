var pageMod = require('sdk/page-mod')

pageMod.PageMod({
  include: '*.facebook.com',
  contentScriptFile: data.url('no-bait.js')
})