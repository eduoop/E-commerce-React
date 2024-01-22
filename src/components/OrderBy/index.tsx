import React from "react";
import { Button, OrderContainer, OrderTitle } from "./styles";
import { LuList } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
type Props = {
  order: {
    price: "none" | "increase" | "decrease";
    date: "none" | "increase" | "decrease";
  };
  setOrder: React.Dispatch<
    React.SetStateAction<{
      price: "none" | "increase" | "decrease";
      date: "none" | "increase" | "decrease";
    }>
  >;
  filter: "price" | "date";
  title: string;
};

export const OrderBy = ({ order, setOrder, title, filter }: Props) => {
  const iconPrice = () => {
    switch (order.price) {
      case "none":
        return <LuList fontSize={19} />;
      case "decrease":
        return <IoIosArrowUp fontSize={19} />;
      case "increase":
        return <IoIosArrowDown fontSize={19} />;
      default:
        return <LuList fontSize={19} />;
    }
  };

  const iconDate = () => {
    switch (order.date) {
      case "none":
        return <LuList fontSize={19} />;
      case "decrease":
        return <IoIosArrowUp fontSize={19} />;
      case "increase":
        return <IoIosArrowDown fontSize={19} />;
      default:
        return <LuList fontSize={19} />;
    }
  };

  const currentStateByFilter = filter === "date" ? order.date : order.price;

  const getNextState = () => {
    switch (currentStateByFilter) {
      case "none":
        return "increase";
      case "increase":
        return "decrease";
      case "decrease":
        return "none";
      default:
        return currentStateByFilter;
    }
  };

  const changeOrder = () => {
    if (filter === "date") {
      setOrder(() => ({
        price: 'none',
        date: getNextState(),
      }));
    } else {
      setOrder(() => ({
        date: 'none',
        price: getNextState(),
      }));
    }
  };

  const icon = filter === "date" ? iconDate() : iconPrice();

  return (
    <OrderContainer>
      <OrderTitle>{title}:</OrderTitle>
      <Button onClick={changeOrder}>{icon}</Button>
    </OrderContainer>
  );
};
