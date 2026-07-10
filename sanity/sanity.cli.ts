import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'cl1i0qop',
    dataset: 'production',
  },

  deployment: {
    autoUpdates: false,
  },

  project: {
    basePath: '/blogAdmin',
  },
})
