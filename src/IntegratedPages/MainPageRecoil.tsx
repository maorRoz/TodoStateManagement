import axios from "axios";
import { atom, selector, useRecoilValue } from "recoil";
import { MainPage } from "../Pages/MainPage";

const todoItemsState = atom({
  key: "todoItemsState",
  default: [],
});

const todoItemsFetchQuery = selector({
  key: "todoItemsFetch",
  get: async () => {
    const response = await axios.get("/items");
    return response.data;
  },
});

export const MainPageRecoil = () => {
  const items = useRecoilValue(todoItemsFetchQuery);
  return <MainPage items={items} />;
};
