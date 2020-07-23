import React from "react";
import "treat-rollup-ui-library/build/lib/treat.css";
import { Link } from "treat-rollup-ui-library";
import * as Icons from "treat-rollup-ui-library-icons";
// import { Add } from "treat-rollup-ui-library";
// import * as Icons from "treat-rollup-ui-library/lib-esm/IconsFile";

function App() {
  return (
    <div>
      <h1>Welcome to t-online</h1>
      <p>
        <Icons.Add />
        <Icons.Warning />
        <button>I'm a button</button>
      </p>
      <p>
        <Link>I'm a link</Link>
      </p>
    </div>
  );
}

export default App;
