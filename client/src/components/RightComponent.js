import React from "react";
import { Route } from "react-router-dom";
import DashboardMain from "./DashboardMain";
import Biodata from "./Biodata";
import ViewBiodata from "./ViewBiodata";
import LoadBiodata from "./LoadBiodata";


export default function RightComponent(props) {
  const { handleUser } = props;

  return (
    <>
      <Route exact path="/dashboard/biodata" component={Biodata} />
      <Route exact path="/dashboard/biodata/load" component={LoadBiodata} />
      <Route exact path="/dashboard/biodata/view" component={ViewBiodata} />
      <Route exact path="/dashboard" 
      render={(routerProps) => (
        <DashboardMain
          handleUser={handleUser}
          {...routerProps}
        />
      )}
      />
    </>
  );
}
