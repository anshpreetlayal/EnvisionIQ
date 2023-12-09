import { Text } from "react-native";
import { useEffect, useState } from "react";

function GetQuote(props) {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("inspirational");

  const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const apikey = { "X-Api-Key": "Nc1JqwaxxhshJ/808pw3LA==mZ17URUr5TiD6RjX" };

  useEffect(() => {
    if (!(props == undefined)) {
      setCategory(props.category);
    }

    fetch(url, {
        method: "GET",
        headers: apikey,
      })
        .then((res) => res.json())
        .then((json) => setQuote(json[0].quote));
    }, []);
  
    return <Text>{quote}</Text>;
  }
  
  export default GetQuote;
  