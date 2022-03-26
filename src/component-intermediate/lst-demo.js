import React, { useState } from "react";
import ReactDom from "react-dom";


const numbers=[1,2,3,4,5]
const listItems=numbers.map((numbers)=><li>{number}</li>)




ReactDom.render(<ul>{listItems}</ul>,document.getElementById("root")) 