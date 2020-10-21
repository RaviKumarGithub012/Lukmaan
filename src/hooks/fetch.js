import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useFetch = (url, method = "GET") => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: `${method}`,
    });
  }, []);

  return <div></div>;
};

useFetch.propTypes = {};

export default useFetch;
