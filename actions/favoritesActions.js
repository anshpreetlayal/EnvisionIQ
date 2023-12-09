export const saveFavoriteQuote = (quote) => ({
    type: "SAVE_FAVORITE_QUOTE",
    payload: quote,
  });
  export const clearSavedQuotes = () => ({
    type: "CLEAR_SAVED_QUOTES",
  });