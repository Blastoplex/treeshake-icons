import React from "react";
import "treat-rollup-ui-library/lib/treat.css";
import { Link, Icons } from "treat-rollup-ui-library";

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
