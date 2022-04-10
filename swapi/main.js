const MainButton = document.querySelector("#mainButton");
const Section = document.querySelector("section");

const LogStatus = () => {
  console.log("button was clicked");
  axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
    const Residents = res.data.results[0].residents;
    Residents.forEach((element) => {
      axios.get(element).then((res) => {
        const H2 = document.createElement("h2");
        H2.textContent = res.data.name;
        Section.appendChild(H2);
      });
    });
  });
};

MainButton.addEventListener("click", LogStatus);
