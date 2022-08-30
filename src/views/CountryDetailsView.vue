<template>
    <div class="col-7" v-if="countryInfo !== null">
      <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code}.png`" :alt="`National flag of ${countryInfo.name}`">
      <h1>{{ countryInfo.name }}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ countryInfo.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ countryInfo.area }}</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
        <router-link v-for="border in countryInfo.borders" :key="border"
          :to="border">
            {{ border }} -
        </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

export default {
  name: 'CountryDetailsView',
  data () {
    return {
      countryInfo: null,
    };
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countryCode) {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.countryInfo = {
          area: data.area,
          alpha2Code: data.alpha2Code.toLowerCase(),
          name: data.name.common,
          capital: data.capital[0],
          borders: data.borders,
        }
      });
    }
  
  this.$watch(
    () => this.$route.params,
    (toParams, previousParams) => {
      if (toParams.countryCode) {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${toParams.countryCode}`)
        .then((response) => response.json())
        .then ((data) => {
          this.countryInfo = {
            area: data.area,
            alpha2Code: data.alpha2Code.toLowerCase(),
            name: data.name.common,
            capital: data.capital[0],
            borders: data.borders,
          }
        });      
      }
    }

  )
  }
};
</script>

<style>

</style>
