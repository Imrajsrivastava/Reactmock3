import axios from "axios";
import React, { useEffect, useState } from "react";
import { getData, handleDelete } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Input,
  Select,
} from "@chakra-ui/react";

const BrowseClassifieds = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  const product = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getData(page, input, filter));
  }, [dispatch, page, input, filter]);

  return (
    <div>
      <div>
        <Heading>SerachBar</Heading>
        <Input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <Select
          placeholder="Filter by Category"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
        </Select>
      </div>

      {product.map((el) => {
        return (
          <>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={el.ImageURL}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>{el.name}</Heading>
                  <Text>{el.Category}</Text>
                  <Text>{el.Description}</Text>
                  <Text>Location: {el.Location}</Text>

                  <Text>postedon: {el.Date}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${el.Price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => {
                    dispatch(handleDelete(el._id, product));
                  }}
                >
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </>
        );
      })}

      <div>
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>
        <Button>{page}</Button>
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default BrowseClassifieds;
