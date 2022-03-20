import React from "react";
import ReactDom from "react-dom";


const Child =props=><div>{props.children}</div>
ReactDom.render(
<>
<Child>Hello</Child>
<Child>Hello</Child>
</>
, document.getElementById("root"))