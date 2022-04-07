import pico from 'picocolors'

import type { Client } from '../Client.mjs'
import { Events } from '../Constant.mjs'

export function onReady(client: Client<true>): () => void {
  function onReady(): void {
    console.log(`Logged in as ${pico.green(client.user.tag)}`)
  }

  client.on(Events.CLIENT_READY, onReady)
  return () => {
    client.off(Events.CLIENT_READY, onReady)
  }
}
