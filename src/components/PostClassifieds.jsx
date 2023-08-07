import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleForm } from "../redux/action";

const PostClassifieds = () => {
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({
    name: "",
    Description: "",
    Category: "",
    ImageURL: "",
    Location: "",
    Price: "",
    Date: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          dispatch(handleForm(e, formdata));
        }}
      >
        <FormControl isRequired>
          <FormLabel> name</FormLabel>
          <Input
            placeholder=" name"
            value={formdata.name}
            onChange={(e) => {
              setFormdata({ ...formdata, name: e.target.value });
            }}
          />
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Description"
            value={formdata.Description}
            onChange={(e) => {
              setFormdata({ ...formdata, Description: e.target.value });
            }}
          />
          <Select
            placeholder="Select Category"
            value={formdata.Category}
            onChange={(e) => {
              setFormdata({ ...formdata, Category: e.target.value });
            }}
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </Select>
          <FormLabel>ImageURL</FormLabel>
          <Input
            placeholder="ImageURL"
            value={formdata.ImageURL}
            onChange={(e) => {
              setFormdata({ ...formdata, ImageURL: e.target.value });
            }}
          />
          <FormLabel>Location</FormLabel>
          <Input
            placeholder="Location"
            value={formdata.Location}
            onChange={(e) => {
              setFormdata({ ...formdata, Location: e.target.value });
            }}
          />
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            placeholder="Date"
            value={formdata.Date}
            onChange={(e) => {
              setFormdata({ ...formdata, Date: e.target.value });
            }}
          />
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            placeholder="Price"
            value={formdata.Price}
            onChange={(e) => {
              setFormdata({ ...formdata, Price: +e.target.value });
            }}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PostClassifieds;
