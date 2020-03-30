<template>
  <div>
    <div class="charts">
      <div class="row">
        <div class="flex xs12">
          <va-card class="chart-widget">
            <h2>DUTA IDOL</h2>
            <h3>Minggu ke -4</h3>
            <br />
            <br />
            <div align="right">
              <b-dropdown id="dropdown" text="Minggu ke" class="m-md-2">
                <b-dropdown-item v-for="sesi in sesis" :key="sesi.id_sesi_vote">{{sesi.ket_sesi}}</b-dropdown-item>
              </b-dropdown>
            </div>
            <va-chart :data="verticalBarChartData" type="vertical-bar" />
          </va-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <va-card class="flex xs12">
          <h2>DATA PESERTA</h2>
          <br />
          <table class="va-table va-table--striped va-table--hoverable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.status }}</td>
                <td>
                  <b-link href="#foo">Edit</b-link>
                  <b-link href="#foo">View</b-link>
                  <b-link href="#foo">Delete</b-link>
                </td>
              </tr>
            </tbody>
          </table>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getVerticalBarChartData } from '../../../data/charts/VerticalBarChartData'
import axios from 'axios'
import { BLink, DropdownPlugin, BootstrapVue, IconsPlugin } from 'bootstrap-vue'

export default {
  name: 'charts',
  data () {
    return {
      verticalBarChartData: getVerticalBarChartData(this.$themes),
      users: [],
      sesis: [],
    }
  },

  async mounted () {
    {
      const response = await axios.get('http://localhost:3000/users')
      this.users = response.data
    }
    {
      const response = await axios.get('http://localhost:3000/sesis')
      this.sesis = response.data
    }
  },
}
</script>

<style lang="scss">
.chart-widget {
  .va-card__body {
    height: 550px;
  }
}
</style>
