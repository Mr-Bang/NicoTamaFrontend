import { Box } from "@mantine/core"

import resets from "@/styles/_resets.module.css"
import classes from "@/styles/PageHeader.module.css"
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from "next/router"

export default function PageHeader() {
  const smallScreen = useMediaQuery("(max-width: 700px)")
  const router = useRouter()

  if (smallScreen || router.pathname == "/auth") return <></>

  return (
    <Box>
      <div className={`${resets.clapyResets} ${classes.banner}`}>
        <div className={classes.bannerPng}></div>
      </div>
      <div className={`${resets.clapyResets} ${classes.header}`}>
        <div className={classes.ulRtGroupLink}>
          <div className={classes.unnamed}>新型コロナウイルスの対応について</div>
          <div className={classes.unnamed2}>カード</div>
          <div className={classes.gORA}>GORA</div>
          <div className={classes.unnamed3}>楽天市場</div>
        </div>
        <div className={classes.divRtServiceBar}>
          <div className={classes.Point}></div>
          <div className={classes.rakutenTravel}>
            <div className={classes.unnamed4}>楽天トラベル</div>
          </div>

          <div className={classes.divRtUtility}>
            <div className={classes.ulRtHelpLink}>
              <div className={classes.unnamed5}>楽天トラベルの使い方</div>
              <div className={classes.unnamed6}>サイトマップ</div>
              <div className={classes.unnamed7}>ヘルプ</div>
              <div className={classes.languages}>Languages</div>
              <div className={classes.pseudo}></div>
            </div>
            <div className={classes.a2}>
              <div className={classes.unnamed8}>予約の確認・キャンセル</div>
            </div>
            <div className={classes.dlRtNologin}>
              <div className={classes.unnamed9}>ようこそ、楽天トラベルへ</div>
              <div className={classes.unnamed10}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>会員登録</span>
                  <span className={classes.label2}> </span>
                </p>
              </div>
              <div className={classes.unnamed11}>ログイン</div>
            </div>
          </div>
        </div>
        <div className={classes.dlRtNavLink}>
          <div className={classes.ulRtNavBox}>
            <div className={classes.a3}>
              <div className={classes.unnamed12}>国内旅行</div>
            </div>
            <div className={classes.unnamed13}>国内ツアー</div>
            <div className={classes.unnamed14}>レンタカー</div>
            <div className={classes.unnamed15}>高速バス・バスツアー</div>
            <div className={classes.unnamed16}>海外旅行</div>
            <div className={classes.unnamed17}>遊び・体験</div>
            <div className={classes.unnamed18}>割引クーポン</div>
            <div className={classes.unnamed19}>ふるさと納税</div>
            <div className={classes.unnamed20}>旅行ガイド</div>
          </div>
        </div>
        <div className={classes.x}>X</div>
      </div>
    </Box>
  )
}
