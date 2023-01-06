async function initMocks() {
  if (typeof window === 'undefined') {
    // Fixes a race condition because import can't be awaited as opposed to require
    // https://github.com/mswjs/msw/issues/1474#issuecomment-1323491118
    // eslint-disable-next-line global-require
    const { server } = await require('./server')
    server.listen()
  } else {
    // Fixes a race condition because import can't be awaited as opposed to require
    // https://github.com/mswjs/msw/issues/1474#issuecomment-1323491118
    // eslint-disable-next-line global-require
    const { worker } = await require('./browser')
    worker.start()
  }
}

initMocks()

export {}
