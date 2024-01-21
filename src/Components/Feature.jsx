import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";

const Feature = () => {
  const [feature, setFeature] = useState({});

  useEffect(() => {
    getFeatureData = async () => {
      const FeatureData = await fetchApi("https://bwfc-api.vercel.app/sponsor");
      setFeature(FeatureData)
    };
  }, []);

  console.log(feature);

  return <div>Feature</div>;
};

export default Feature;
