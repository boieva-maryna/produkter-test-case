import { Card, Image, Text, Group, createStyles } from "@mantine/core";
import { FC } from "react";
import { Product } from "../redux/slices/products/types";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imgSection: {
    flex: 1,
    placeholder: {
      height: "100%",
    },
  },
  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { classes } = useStyles();

  const src = `${process.env.REACT_APP_BASE_API}/picture/${product.id}`;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.imgSection}>
        <Image src={src} alt={product.name} withPlaceholder />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {product.name}
          </Text>
        </Group>
        <Text size="sm" mt="xs"></Text>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
