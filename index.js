import express from 'express'
import consign from 'consign'

const app = express()

// consing modulo responsavel pelo carregamento
consign()
  .include('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)
