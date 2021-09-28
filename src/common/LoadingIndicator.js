import React from 'react';
import {Spin, Icon} from 'antd';
import './LoadingIndicator.css'

export default function LoadingIndicator() {
  const antIcon = <Icon type="loading-3-quarters" style={{fontSize: 30}} spin/>;
  return (
      <section className={"lhotseSpin"}>
        <Spin indicator={antIcon}/>
      </section>
  );
}
