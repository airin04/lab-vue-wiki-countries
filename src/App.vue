<template>
  <div className="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col">
          <CountriesList :countries="showCountriesList" />
        </div>
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countriesData from "../public/countries.json";
import NavBar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    CountriesList,
  },
  data() {
    return {
      countries: countriesData,
    };
  },
  computed: {
    showCountriesList() {
      let countryId = 0;
      return this.countries.map((country) => {
        return {
          id: countryId++,
          name: country.name.common,
          alpha2Code: country.alpha2Code.toLowerCase(),
          alpha3Code: country.alpha3Code,
        };
      });
    },
  },
};
</script>

<style></style>
