// const data={
//     type:"MOVIES_LIST",
//     payload:[object you fetch from server]
// }

import { MOVIES_LIST } from "../types";

export default function (state = null, action) {
  switch (action.type) {
    case MOVIES_LIST:
      //run some code
      return action.payload;
    default:
      return state;
  }
}
