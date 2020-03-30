<template>
  <div class="registasi-juri">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <h2>REGISTRASI JURI</h2>
          <br />
          <form>
            <div class="row">
              <div class="flex xs12">
                <label>Nama</label>
                <br />
                <br />
                <va-input v-model="form.username" placeholder="Masukan Nama Anda" />
              </div>
              <div class="flex xs12">
                <label>Email</label>
                <br />
                <br />
                <va-input v-model="form.email" placeholder="Masukan Email Anda" />
              </div>
              <div class="flex xs12">
                <label>Password</label>
                <br />
                <br />
                <va-input v-model="form.password" placeholder="Masukan Password Anda" />
              </div>
              <div class="flex xs12">
                <label>Konfirmasi Password</label>
                <br />
                <br />
                <va-input v-model="form.confpass" placeholder="Konfirmasi Password Anda" />
              </div>
              <div class="flex xs12">
                <label>Status</label><br><br>
                <va-select
                  v-model="simpleSelectModel"
                  textBy="description"
                  :options="simpleOptions"
                />
              </div>
              <div>
                <button class="btn btn-success">Edit Data Diri</button>
              </div>
            </div>
          </form>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registrasi-juri',
  data () {
    return {
      form: [
        {
          username: '',
          email: '',
          password: '',
          confpass: '',
        },
      ],
      simpleSelectModel: '',
      simpleOptions: [
        {
          id: 1,
          description: 'Aktif',
        },
        {
          id: 2,
          description: 'Tidak Aktif',
        },
      ],
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
  },
}
</script>

<style>
.row.row-inside {
  max-width: none;
}
</style>
