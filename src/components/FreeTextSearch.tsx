import React, { FC, useCallback, useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../redux/slices/products/selectors";
import { setFilters } from "../redux/slices/products/filtersSlice";

const FreeTextSearch: FC = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector(selectFilters);

  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    setValue(searchText);
  }, [searchText]);

  useEffect(() => {
    dispatch(setFilters({ searchText: debounced }));
  }, [dispatch, debounced]);

  return (
    <TextInput
      placeholder="Search product"
      size="lg"
      onChange={handleChange}
      value={value}
      icon={<IconSearch size={20} />}
    />
  );
};

export default FreeTextSearch;
