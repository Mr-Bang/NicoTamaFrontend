import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell, MantineProvider } from '@mantine/core';
import PageHeader from '@/components/PageHeader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider  withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
	header={<PageHeader />}
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
