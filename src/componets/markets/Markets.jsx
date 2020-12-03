import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, sign_in } from "./redux/actions/counter";
const Markets = () => {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="result">{counter}</div>
      <button onClick={() => dispatch(increment(2))}>
        <AddIcon />
      </button>
      <button onClick={() => dispatch(decrement())}>
        <RemoveIcon />
      </button>
      <button variant="primary" onClick={() => dispatch(sign_in())}>
        ورود به سایت
      </button>
      {login ? (
        <div className="text-center">
          <p style={{ color: "white" }}>شما وارد شده اید</p>
        </div>
      ) : null}
    </div>
  );
};
export default Markets;
