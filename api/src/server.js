(async () => {
    //comunicação com banco de dados
    //statup dos plugins
    await require('./plugins/system/core.plugins').setup()
    await require('./plugins/system/core.api').setup()
})()
