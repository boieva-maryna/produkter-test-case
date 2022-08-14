import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../redux/slices/products/filtersSlice";
import { Button } from "@mantine/core";

const ResetButton: FC = () => {
  const dispatch = useDispatch();
  const onReset = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return <Button onClick={onReset}>Reset filters</Button>;
};

export default ResetButton;
