<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <label class="pull-left">Username</label> <br>
        <input type="text" class="form-control" placeholder="input your username" v-model="form.username_peserta">
      </div>
      <div class="form-group">
        <label class="pull-left">Password</label><br>
        <input type="text" class="form-control" placeholder="input your username" v-model="form.pass_peserta">
      </div>
      <div class="form-group">
        <label class="pull-left">Name</label><br>
        <input type="text" class="form-control" placeholder="input your username" v-model="form.nama_peserta">
      </div>
      <div class="form-group">
        <label class="pull-left">Status</label><br>
        <input type="text" class="form-control" placeholder="choose your status" v-model="form.status_peserta"><br>
      </div>
      <button class="btn btn-success">Submit</button>
    </form>
    <!-- <router-link :to="{ name: 'getData' }">Navigate to getData</router-link> -->
  </div>
</template>

<script>

import axios from 'axios'

export default {

  data () {
    return {
      form: {
        username_peserta: '',
        pass_peserta: '',
        nama_peserta: '',
        status_peserta: '',
      },
    }
  },
  methods: {

    async save () {
      try {
        const response = await axios.post('http://localhost:8000/api/admin/createPeserta', this.form)
        this.sipolis = response.data.sipoli
        this.username_peserta = ''
        this.pass_peserta = ''
        this.nama_peserta = ''
        this.status_peserta = ''
      } catch (e) {
        console.log(e)
      }
    },
  },

}

</script>

<style scoped>
    h1,
    h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
</style>
