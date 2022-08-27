import React from "react";
import Profile from "./Profile";
import Link from "next/link";

function Heropage() {
  return (
    <div className="heropage">
      <Link href="/">
        <div>
          <Profile />
        </div>
      </Link>
    </div>
  );
}

export default Heropage;
