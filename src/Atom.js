// import {atom} from "recoil";
import {atom} from "chromogen";

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });

export default textState;