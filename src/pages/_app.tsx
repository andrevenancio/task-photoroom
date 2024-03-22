import type { AppProps } from "next/app"

import { Application } from "@/components/application"
import { ClientProvider } from "@/state/client-provider"

import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider>
      <Application>
        <Component {...pageProps} />
      </Application>
    </ClientProvider>
  )
}
