import {ConfigurationCard, EditorCard} from "@containers";
import {useProvider} from "@hooks";
import React from "react";

export function Layout() {
  const {providers, selectedProvider, selectProvider} = useProvider();

  return (
    <div className="row justify-content-center gx-3 min-vh-100">
      <div className="col-xl-4 col-xxl-3 py-0 py-xl-5">
        <ConfigurationCard selectedProvider={selectedProvider}/>
      </div>
      <div className="col-xl-7 col-xxl-8 py-0 py-xl-5">
        <EditorCard providers={providers} selectedProvider={selectedProvider} selectProvider={selectProvider}/>
      </div>
    </div>
  );
}
