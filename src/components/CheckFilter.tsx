import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../redux/slices/products/selectors";
import { setFilters } from "../redux/slices/products/filtersSlice";
import { Checkbox } from "@mantine/core";

const options = [1, 2];

const CheckFilter: FC = () => {
  const dispatch = useDispatch();
  const { complianceTypeIds } = useSelector(selectFilters);

  const onChange = useCallback(
    (value: string[]) => {
      dispatch(setFilters({ complianceTypeIds: value.map((s) => Number(s)) }));
    },
    [dispatch]
  );

  return (
    <Checkbox.Group
      value={complianceTypeIds.map((n) => String(n))}
      onChange={onChange}
      label="Filter by product type"
      orientation="vertical"
      size="md"
    >
      {options.map((value) => (
        <Checkbox key={value} value={String(value)} label={`Option ${value}`} />
      ))}
    </Checkbox.Group>
  );
};

export default CheckFilter;
