import React from 'react';
import './LoadingIndicator.css'
import {Spinner} from "reactstrap";

export default function LoadingIndicator() {
  return (
      <section className={"lhotseSpin"}>
        <Spinner size="sm" color="primary"/>
      </section>
  );
}
