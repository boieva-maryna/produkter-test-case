import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../redux/slices/products/filtersSlice";
import { Button } from "@mantine/core";
import { selectFilters } from "../redux/slices/products/selectors";

const ResetButton: FC = () => {
  const dispatch = useDispatch();
  const onReset = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const { complianceTypeIds, searchText } = useSelector(selectFilters);

  const isFiltred = searchText || complianceTypeIds.length;

  return (
    <Button disabled={!isFiltred} onClick={onReset}>
      Reset filters
    </Button>
  );
};

export default ResetButton;
