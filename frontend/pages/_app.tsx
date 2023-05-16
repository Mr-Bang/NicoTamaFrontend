import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell, MantineProvider, ButtonStylesParams } from '@mantine/core';
import PageHeader from '@/components/PageHeader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '2.625rem',
                padding: '0 1.875rem',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },
        },
      }}
    >
      <AppShell
        padding="md"
	header={<PageHeader />}
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
