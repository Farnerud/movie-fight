const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8da83971",
      i: "tt0118661",
    },
  });

  console.log(response.data);
};

fetchData();
