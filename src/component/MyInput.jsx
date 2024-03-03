import { forwardRef } from "react";
const myinput = (props, ref) => {
  return <input {...props} ref={ref} />;
};

const forwardInput = forwardRef(myinput);
export default forwardInput;
// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });
// export default MyInput;
