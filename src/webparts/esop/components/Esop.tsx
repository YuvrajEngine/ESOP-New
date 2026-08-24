import * as React from "react";
import styles from "./Esop.module.scss";
import type { IEsopProps } from "./IEsopProps";
import { HashRouter, Switch, Route } from "react-router-dom";
//-----Pages-----//
import Dashboard from "./Pages/Dashboard";

export default class Esop extends React.Component<IEsopProps> {
  public render(): React.ReactElement<IEsopProps> {
    return (
      <section className={`${styles.esop}`}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          </Switch>
        </HashRouter>
      </section>
    );
  }
}