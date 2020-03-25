<template>
  <div class="registasi-peserta">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <h2>REGISTRASI PESERTA</h2>
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
              <div>
                <button class="btn btn-success">
                  <label>Submit</label>
                  <router-link to="/">
                    <va-icon-vuestic />
                  </router-link>
                </button>
              </div>
              <!-- <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.simple')"
                  v-model="simpleSelectModel"
                  textBy="description"
                  :options="simpleOptions"
                />
              </div>-->
            </div>
          </form>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registrasi-peserta',
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
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
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
