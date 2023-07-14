
import { Manifest } from './Manifest.ts'
import { start } from 'Fresh/server.ts'


await start(Manifest,{
    staticDir : 'Static'
})
