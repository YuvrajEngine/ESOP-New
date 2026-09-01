import * as React from "react";
import styles from "./Esop.module.scss";
import type { IEsopProps } from "./IEsopProps";
import { HashRouter, Switch, Route } from "react-router-dom";
//-----Pages-----//
import Dashboard from "./Pages/Dashboard";
import NewRequest from "./Pages/NewRequest";
import ViewRequest from "./Pages/ViewRequest";
import EditRequest from "./Pages/EditRequest";
import ExerciseDashboard from "./Pages/ExerciseDashboard";
import ExerciseForm from "./Pages/ExerciseForm";

export default class Esop extends React.Component<IEsopProps> {
  public render(): React.ReactElement<IEsopProps> {
    return (
      <section className={`${styles.esop}`}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Dashboard {...this.props} />} />
            <Route exact path="/NewEsopRequest" render={() => <NewRequest {...this.props} />} />
            <Route
              exact
              path="/ViewEsopRequest/:id"
              render={(routeProps) => <ViewRequest {...this.props} {...routeProps} />}
            />
            <Route
              exact
              path="/EditEsopRequest/:id"
              render={(routeProps) => <EditRequest {...this.props} {...routeProps} />}
            />
            <Route
              exact
              path="/ExerciseDashboard"
              render={() => <ExerciseDashboard {...this.props} />}
            />
            <Route
              exact
              path="/ExerciseForm/:id"
              render={(routeProps) => <ExerciseForm {...this.props} {...routeProps} />}
            />
          </Switch>
        </HashRouter>
      </section>
    );
  }
}