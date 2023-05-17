import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AppShell, MantineProvider } from "@mantine/core"
import PageHeader from "@/components/PageHeader"
import PageFooter from "@/components/PageFooter"

export default function App({ Component, pageProps }: AppProps) {
  return (
    //<MantineProvider  withGlobalStyles withNormalizeCSS>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell padding='md' header={<PageHeader />} footer={<PageFooter />}>
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
