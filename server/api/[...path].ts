export default defineEventHandler(async (event) => {
  try {
    const path: string = event.context.params?.path || 'home'

    const query = getQuery(event)
    const { serverUrl } = useRuntimeConfig(event)
    return await $fetch(serverUrl + '/' + path, {
      query,
    })
  }
  catch (error) {
    console.log(error.message)

    throw createError({
      statusCode: error.status || 500,
      statusMessage: error.message || 'Proxy request failed',
    })
  }
})
