import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "users",
  })

  return Response.json(data)

  // return Response.json({
  //   message: 'This is an example of a custom route.',
  // })
}
