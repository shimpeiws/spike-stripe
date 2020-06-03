import * as React from "react";
import { Switch } from "react-router";
import { Route, Link } from "react-router-dom";
import { PaymentMethod } from "./PaymentMethod";
import { Token } from "./Token";
import { Account } from "./Account";
import { NotFound } from "./NotFound";

export interface Props {}

export function Routes(_: Props) {
  return (
    <>
      <>
        <Link to="/">Payment Method</Link>
        <br />
        <Link to="/token">Token</Link>
        <br />
        <Link to="/account">Account</Link>
      </>
      <Switch>
        <Route exact path="/" component={PaymentMethod} />
        <Route exact path="/token" component={Token} />
        <Route exact path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
