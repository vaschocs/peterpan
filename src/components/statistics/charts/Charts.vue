<template>
  <div>
    <div class="charts">
      <div class="row">
        <div class="flex xs12">
          <va-card class="chart-widget" :title="$t('charts.verticalBarChart')">
            <button class="btn btn-dropdown" >Submit</button>
            <va-chart :data="verticalBarChartData" type="vertical-bar" />
          </va-card>
        </div>
      </div>
    </div>
    <div class="markup-tables">
      <div class="row">
        <div class="flex xs12">
          <va-card>
            <h2>DATA PESERTA</h2>
            <br />
            <table class="va-table va-table--striped va-table--hoverable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Jumlah Vote</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.jmlvote }}</td>
                  <td>
                    <va-badge :color="getStatusColor(user.status)">{{ user.status }}</va-badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVerticalBarChartData } from '../../../data/charts/VerticalBarChartData'
import data from './data.json'

export default {
  name: 'charts',
  data () {
    return {
      verticalBarChartData: getVerticalBarChartData(this.$themes),
      users: data.slice(0, 8),
    }
  },

  methods: {
    getStatusColor (status) {
      if (status === 'finalis') {
        return 'success'
      }

      if (status === 'audisi') {
        return 'info'
      }

      return 'danger'
    },
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
