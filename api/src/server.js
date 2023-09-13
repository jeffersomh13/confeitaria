(async () => {
    await require('./plugins/system/core.plugins').setup()
    await require('./plugins/system/core.api').setup()
})()

// (async () => { 
//     //função anonima //statup de inicialização
//     //conexeão ao banco de dados
//     //statup dos plugins
//     const config = require('./config.json')
//     const keys = Object.keys(config)
//     await keys.forEach(async key => {
//         const plugin = require(`./plugins/${key}`)
//         if (plugin?.setup) await plugin.setup()
//     })
// })()

