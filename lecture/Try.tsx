import React, {memo} from "react";
import {TryInfo, TryProps} from "./common_types";



const Try: React.FunctionComponent<TryProps> = memo(({tryInfo}) => {
   return (
       <li>
          <div>{tryInfo.tryValue}</div>
          <div>{tryInfo.result}</div>
       </li>
   );
});


export default Try;
