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

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
