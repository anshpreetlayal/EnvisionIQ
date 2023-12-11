import React, { useEffect, useState } from "react";
import { Text } from "react-native";

function GetQuote(props) {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("inspirational");

  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const apikey = "Nc1JqwaxxhshJ/808pw3LA==mZ17URUr5TiD6RjX";

  useEffect(() => {
    if (props && props.category) {
      setCategory(props.category);
    }

    const fetchQuote = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": apikey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const json = await response.json();
        if (json && json.length > 0 && json[0].quote) {
          setQuote(json[0].quote);
        } else {
          setQuote("No quote available");
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Unable to fetch quote at the moment");
      }
    };

    fetchQuote();
  }, [props, url, apikey, category]);

  return <Text>{quote}</Text>;
}

export default GetQuote;