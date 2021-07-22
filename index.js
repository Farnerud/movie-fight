// Fetch Data for API
const fetchData = async (searchTerm) => {
  const res = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8da83971",
      s: searchTerm,
    },
  });

  return res.data.Search;
};

// Select input
const input = document.querySelector("input");

/*
 * Call the fetch data on user input
 */
const onInput = async (event) => {
  // add movies fetched in a constant
  const movies = await fetchData(event.target.value);

  // Looping through movies data
  for (let movie of movies) {
    const div = document.createElement("div");

    // Render image and title for each movie
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;

    // Add div elements to the target div
    document.querySelector("#target").appendChild(div);
  }
};

// Call eventListener on input and debounce it.
input.addEventListener("input", debounce(onInput, 500));
