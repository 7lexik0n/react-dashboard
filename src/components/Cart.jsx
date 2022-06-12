import React, { useReducer } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Button } from ".";
import { cartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, { type, id }) => {
  switch (type) {
    case INCREMENT: {
      const newState = [...state];
      const item = newState.find((el) => el.name === id);
      item.count++;
      return newState;
    }
    case DECREMENT: {
      const newState = [...state];
      const item = newState.find((el) => el.name === id);
      if (item.count > 0) {
        item.count--;
      }
      return newState;
    }
    default:
      return state;
  }
};

const initialState = [
  { name: "Butterscotch ice-cream", cost: 250, count: 1 },
  { name: "Supreme fresh tomato", cost: 450, count: 1 },
  { name: "Red color candy", cost: 190, count: 1 },
];

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({
      type: INCREMENT,
      id,
    });
  };

  const decrease = (id) => {
    dispatch({
      type: DECREMENT,
      id,
    });
  };

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            className="text-2xl rounded-full p-3 hover:bg-light-gray hover:drop-shadow-xl block"
            type="button"
            onClick={() => handleClick("")}
            style={{
              color: "rgb(153, 171, 180)",
              borderRadius: "50%",
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p
                        className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer"
                        onClick={() => decrease(item.name)}
                      >
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        {state.find((el) => el.name === item.name).count}
                      </p>
                      <p
                        className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 cursor-pointer"
                        onClick={() => increase(item.name)}
                      >
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">
              ${state.reduce((acc, el) => acc + el.count * el.cost, 0)}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="100%"
            onClick={() => handleClick("")}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
