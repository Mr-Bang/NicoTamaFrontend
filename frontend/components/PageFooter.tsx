import resets from '@/styles/_resets.module.css';
import classes from '@/styles/PageFooter.module.css';

export default function PageFooter() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ulRtFootNav}>
        <div className={classes.unnamed}>会社情報</div>
        <div className={classes.li}>
          <div className={classes.unnamed2}>個人情報保護方針</div>
        </div>
        <div className={classes.liRtForPc}>
          <div className={classes.CSR}>社会的責任[CSR]</div>
        </div>
        <div className={classes.liRtForPc2}>
          <div className={classes.unnamed3}>採用情報</div>
        </div>
        <div className={classes.liRtForPc3}>
          <div className={classes.unnamed4}>規約集</div>
        </div>
        <div className={classes.liRtForPc4}>
          <div className={classes.unnamed5}>資料請求</div>
        </div>
      </div>
      <div className={classes.RakutenGroupInc}>© Rakuten Group, Inc.</div>
    </div>
  )
}
