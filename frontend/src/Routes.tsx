import * as React from "react";
import { Switch } from "react-router";
import { Route, Link } from "react-router-dom";
import { PaymentMethod } from "./PaymentMethod";
import { PaymentIntent } from "./PaymentIntent";
import { Account } from "./Account";
import { NotFound } from "./NotFound";

export interface Props {}

export function Routes(_: Props) {
  return (
    <>
      <>
        <Link to="/">Payment Method</Link>
        <br />
        <Link to="/payment-intent">Payment Intent</Link>
        <br />
        <Link to="/account">Account</Link>
      </>
      <Switch>
        <Route exact path="/" component={PaymentMethod} />
        <Route exact path="/payment-intent" component={PaymentIntent} />
        <Route exact path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
