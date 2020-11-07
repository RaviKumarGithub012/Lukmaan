import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAsync } from "../services/utils/AsyncStorage";

const useFetch = (url, get = false, post = false, data = null) => {
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState(null);

  const callWebServices = async () => {
    const token = await getAsync("userToken");
    if (get) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => setResponse(json))
        .catch((err) => setIsError(err));
    } else if (post) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ data }),
      })
        .then((res) => res.json())
        .then((json) => setResponse(json))
        .catch((err) => setIsError(err));
    }
  };

  useEffect(() => callWebServices(), []);

  return { response, isError };
};

useFetch.propTypes = {
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  get: PropTypes.bool,
  post: PropTypes.bool,
  data: PropTypes.object.isRequired,
};

export default useFetch;
