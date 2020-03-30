<template>
  <div>
    <div class="lihat-peserta">
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
                    <b-link href="#foo">Edit </b-link>
                    <b-link href="#foo">View </b-link>
                    <b-link href="#foo">Delete</b-link>
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
import axios from 'axios'
import { LinkPlugin } from 'bootstrap-vue'

export default {
  name: 'lihat-peserta',
  data () {
    return {
      users: [],
    }
  },

  async mounted () {
    const response = await axios.get('http://localhost:3000/users')
    this.users = response.data
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
