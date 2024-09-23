import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { keyword: urlKeyword } = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        placeholder="Search products"
        value={keyword}
        className="mr-sm-2 ml-sm-5"
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="mx-2 p-2">
        Search
      </Button>
    </Form>
  );
};

export default Search;
