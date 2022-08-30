<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link
            v-for="country in countries"
            :key="country.id"
            :to="country.alpha3Code"
            class="list-group-item list-group-item-action"
          >
            <img
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`"
              :alt="`National flag of ${country.name}`"
            /><br/>
            {{ country.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
  props: {
    countries: Array,
  },
};
</script>
