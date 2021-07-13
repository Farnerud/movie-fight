const fetchData = async (searchTerm) => {
  const res = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8da83971",
      s: searchTerm,
    },
  });

  console.log(res.data);
};

const input = document.querySelector("input");

let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
