module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`Api rodando na porta ${app.get('port')}`)
  })
}
