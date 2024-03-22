import { NextApiRequest, NextApiResponse } from "next"

const { API_URL, BASE64_IMAGE_HEADER, API_KEY } = process.env

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body

  try {
    const response = await fetch(API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": API_KEY!,
      },
      body,
    })

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server")
    }

    const result = await response.json()
    const image = BASE64_IMAGE_HEADER + result.result_b64

    res.status(200).json({ image })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
