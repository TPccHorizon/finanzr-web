<template>
  <div >
<!--    <v-data-table :headers="headers" :items="items" hide-default-footer class="elevation-1">-->
<!--    </v-data-table>-->
    <h2 v-if="items != null">{{items.year}}</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="header in headers" :key="header.text">
              {{header.text}}
            </th>
          </tr>
        </thead>
        <tbody v-if="items != null && items.data.length > 0">
          <tr v-for="item in items.data" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.jan }}</td>
            <td>{{ item.feb }}</td>
            <td>{{ item.mar }}</td>
            <td>{{ item.apr }}</td>
            <td>{{ item.may }}</td>
            <td>{{ item.jun }}</td>
            <td>{{ item.jul }}</td>
            <td>{{ item.aug }}</td>
            <td>{{ item.sep }}</td>
            <td>{{ item.oct }}</td>
            <td>{{ item.nov }}</td>
            <td>{{ item.dec }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  import months from "@/utils/months";

export default {
  name: 'FinanceTable',
  props: {
    msg: String
  },
  data: function() {
    return {
      headers: [{
        text: ''
      }],
      items: null
    }
  },
  mounted: function () {
    for (let i=1; i<=12; i++) {
      let header = {
        text: this.$t(months.get(i)),
        align: 'start',
        sortable: false,
        value: 'name'
      };
      this.headers.push(header);
    }
      this.axios.get('https://my-json-server.typicode.com/TPccHorizon/APIMock/finance-data')
              .then(response => {
        let categoryData = response.data;
        console.log(categoryData);
        this.items = categoryData;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
