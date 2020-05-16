import React from "react";
import Layout from 'layout';
import { Button } from '@material-ui/core';
import ReactorComponent from 'core/component/reactor.component';
export default class Users extends ReactorComponent {
  init() {

  }
  render() {
    return (
      <Layout><Button color="primary">Hello World</Button></Layout>
    );
  }

}