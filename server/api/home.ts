export default defineEventHandler((event) => {
  try {
    const { serverUrl } = useRuntimeConfig(event)

    return $fetch(`${serverUrl}/api/v1/home`)

    return { hello: 'world' }
  }
  catch (error) {
    return error
  }
})
