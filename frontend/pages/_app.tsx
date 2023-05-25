import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AppShell, MantineProvider } from "@mantine/core"
import PageHeader from "@/components/PageHeader"
import PageFooter from "@/components/PageFooter"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 768) {
        // iPadサイズ以下の場合
        router.push("/smallScreen") // 別のページにリダイレクト
      }
    }

    handleResize() // 初回描画時にも実行

    window.addEventListener("resize", handleResize) // リサイズイベントの監視
    return () => {
      window.removeEventListener("resize", handleResize) // コンポーネントがアンマウントされた時にイベントリスナーを削除
    }
  }, [])
  return (
    //<MantineProvider  withGlobalStyles withNormalizeCSS>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell padding='md' header={<PageHeader />} footer={<PageFooter />}>
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
