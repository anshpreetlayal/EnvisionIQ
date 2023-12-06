import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

// Example API to fetch quotes ( Still looking for the right api keys)
const fetchQuote = async () => {
  try {
    // Perform fetch from  the API key here
    const response = await fetch("YOUR_QUOTES_API_ENDPOINT");
    const data = await response.json();
    return data.quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Unable to fetch quote at the moment.";
  }
};

const HomeScreen = () => {
  const [quote, setQuote] = useState("");

  // Fetch a new quote when the component mounts
  useEffect(() => {
    const getNewQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };

    getNewQuote();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Welcome to EnvisionIQ!
      </Text>
      <Text style={{ textAlign: "center", margin: 20 }}>{quote}</Text>
      <Button
        title="Get New Quote"
        onPress={async () => {
          const newQuote = await fetchQuote();
          setQuote(newQuote);
        }}
      />
    </View>
  );
};

export default HomeScreen;