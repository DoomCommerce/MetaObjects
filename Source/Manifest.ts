
export { Manifest }

import type { Manifest } from 'Fresh/server.ts'
import * as Home from './Routes/index.tsx'


const Manifest = {

    baseUrl : import.meta.url ,

    islands : {} ,

    routes : {
        './routes/index.tsx' : Home
    },

    config : {
        importMap : '../.github/Imports.json'
    }

} satisfies Manifest

