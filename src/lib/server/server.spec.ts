/**
 * houston/src/lib/server/server.spec.ts
 * Tests that the web server does what it needs to.
 */

import * as supertest from 'supertest'

import { Log } from '../log'
import { ServerError } from './error'
import { Server } from './server'

import { setup as setupConfig } from '../../../test/utility/config'

let config = null
let server = null

beforeEach(async () => {
  config = await setupConfig()
  server = new Server(config)
})

afterEach(async () => {
  await server.close()
})

test('can listen on random port', async () => {
  await server.listen(0)

  await supertest(`localhost:${server.port}`)
    .get('/')
    .expect(404)
})

test('http function returns a server for testing on', async () => {
  return supertest(server.http())
    .get('/')
    .expect(404)
})
