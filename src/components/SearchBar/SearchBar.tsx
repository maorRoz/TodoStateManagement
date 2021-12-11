import React from "react";
import { SearchBarInput, SearchBarButton, SearchBarLayout } from "./styles";

export const SearchBar = () => (
  <SearchBarLayout>
    <SearchBarInput />
    <SearchBarButton>Search</SearchBarButton>
  </SearchBarLayout>
);
