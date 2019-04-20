// @flow
import React, { Component } from "react";
import styles from "./index.module.css";

const Title = (props) => (
  <div className={styles.titleContainer}>{props.title}</div>
);

export default Title;