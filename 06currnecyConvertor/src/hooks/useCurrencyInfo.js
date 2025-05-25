// src/hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setData(data.rates); // ✅ Only set the rates object
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
