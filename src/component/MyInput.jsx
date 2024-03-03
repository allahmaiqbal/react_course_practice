import { forwardRef, useImperativeHandle, useRef } from "react";
const myinput = (props, ref) => {
  const reaInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      reaInputRef.current.focus();
    },
  }));
  return <input {...props} ref={reaInputRef} />;
};

const forwardInput = forwardRef(myinput);
export default forwardInput;
// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });
// export default MyInput;
