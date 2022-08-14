import {
  Container,
  Pagination,
  Center,
  Alert,
  Grid,
  Loader,
} from "@mantine/core";
import { IconAlertTriangle, IconSearchOff } from "@tabler/icons";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/slices/products/filtersSlice";
import { useGetProductsQuery } from "../redux/slices/products/productsSlice";
import { selectFilters } from "../redux/slices/products/selectors";
import ProductCard from "./ProductCard";
import { createStyles } from "@mantine/core";
import ScrollToTop from "./ScrollToTop";

const useStyles = createStyles((theme) => ({
  cardContainer: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      minHeight: "450px",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      minHeight: "250px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      minHeight: "50vh",
    },
  },
}));

const ProductsList: FC = () => {
  const { classes } = useStyles();

  const filters = useSelector(selectFilters);
  const { isFetching, isLoading, isError, data } = useGetProductsQuery(filters);

  const dispatch = useDispatch();
  const handleChangePage = useCallback(
    (page: number) => {
      dispatch(setFilters({ page }));
    },
    [dispatch]
  );

  const isLoaded = !isLoading && !isFetching;

  return (
    <Container fluid>
      {!isLoaded && (
        <Center>
          <Loader size="xl" />
        </Center>
      )}
      {isLoaded && !data?.pageCount && !isError && (
        <Alert
          icon={<IconSearchOff />}
          title="No result"
          color="blue"
          variant="outline"
        >
          Nothing was found for your request. Try changing the search term or
          filter criteria
        </Alert>
      )}
      {isError && isLoaded && (
        <Alert
          icon={<IconAlertTriangle />}
          title="Error"
          color="red"
          variant="outline"
        >
          An error occured. Try refreshing the page
        </Alert>
      )}
      {!!data?.results.length && !isError && isLoaded && (
        <>
          <Grid gutter="md">
            {data.results.map((product) => (
              <Grid.Col
                sm={6}
                md={4}
                xl={3}
                className={classes.cardContainer}
                key={product.id}
              >
                <ProductCard product={product} />
              </Grid.Col>
            ))}
          </Grid>
          <Center p="md">
            <Pagination
              page={filters.page}
              onChange={handleChangePage}
              total={data.pageCount}
            />
          </Center>
        </>
      )}
      <ScrollToTop />
    </Container>
  );
};

export default ProductsList;
