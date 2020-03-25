export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'charts',
      displayName: 'Dashboard',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'forms',
      displayName: 'Peserta',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-files',
      },
      disabled: true,
      children: [
        {
          name: 'registrasi-peserta',
          displayName: 'Registasi Peserta',
        },
        {
          name: 'lihat-peserta',
          displayName: 'Lihat Peserta',
        },
      ],
    },
    {
      name: 'juri',
      displayName: 'Juri',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-files',
      },
      children: [
        {
          name: 'regitrasi-juri',
          displayName: 'Registrasi Juri',
        },
        {
          name: 'lihat-juri',
          displayName: 'Lihat Juri',
        },
      ],
    },
  ],
}
