const fetchData = async () => {
  const res = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8da83971",
      i: "tt0118661",
    },
  });

  console.log(res.data);
};

fetchData();
