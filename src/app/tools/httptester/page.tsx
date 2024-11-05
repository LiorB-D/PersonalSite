import { headers } from 'next/headers'

export default async function Page() {
  const headersObj = await headers()
  return (
    <div>
      <h1>HTTP Tester</h1>
      <p>X Forwarded for: {headersObj.get('x-forwarded-for')}</p>
      <p>Real IP: {headersObj.get('x-real-ip')}</p>
    </div>
  )
}