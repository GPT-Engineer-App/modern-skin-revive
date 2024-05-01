import { Box, Container, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Figs by Grace Body Scrubs
      </Heading>
      <Text fontSize="xl" mb={10} textAlign="center">
        Discover the luxury of smooth, glowing skin with our all-natural body scrubs.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.image} alt={product.name} borderRadius="md" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              {product.name}
            </Heading>
            <Text mb={4}>{product.description}</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const products = [
  {
    name: "Lavender Bliss",
    description: "A calming blend of lavender and chamomile to soothe your skin and your senses.",
    image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGJvZHklMjBzY3J1YnxlbnwwfHx8fDE3MTQ1ODk5NzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Citrus Burst",
    description: "Energize your skincare routine with the zesty aroma of citrus and hints of ginger.",
    image: "https://images.unsplash.com/photo-1506003094589-53954a26283f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXRydXMlMjBib2R5JTIwc2NydWJ8ZW58MHx8fHwxNzE0NTg5OTcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Mint Refresh",
    description: "Refresh and revitalize with the cool sensation of mint and a touch of eucalyptus.",
    image: "https://images.unsplash.com/photo-1506003094589-53954a26283f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW50JTIwYm9keSUyMHNjcnVifGVufDB8fHx8MTcxNDU4OTk3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export default Index;
