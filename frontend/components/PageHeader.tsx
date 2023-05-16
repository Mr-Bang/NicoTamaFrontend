import { Header } from '@mantine/core'

import resets from '@/styles/_resets.module.css';
import classes from '@/styles/PageHeader.module.css';

export default function PageHeader() {
  return  (
    <Header height={40}>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <div className={classes.bannerPng}></div>
      </div>
    </Header>
  );
}
