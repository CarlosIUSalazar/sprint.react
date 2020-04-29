import React from "react";
import "../styles/navbar.css";
import _ from "lodash";

export default function Home() {
  return (
    <button
      className="button home"
      type="submit"
      onChange={e => setName(e.target.value)}
    >
      Home type=submit
    </button>
  );
}
