module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Api rodando na porta ${app.get('port')}`)
    })
  })
}
