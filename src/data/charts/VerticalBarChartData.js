export const getVerticalBarChartData = (themes) => ({
  labels: ['Erica', 'Ferren', 'Michael', 'Asland', 'Moses', 'Jordan', 'Jhon', 'Arlen', 'Bram', 'Kezia'],
  datasets: [
    {
      label: 'VOTE',
      backgroundColor: themes.info,
      borderColor: 'transparent',
      data: [50, 20, 12, 39, 100, 40, 39, 80, 40, 20],
    },
    // {
    //   label: 'USSR',
    //   backgroundColor: themes.info,
    //   borderColor: 'transparent',
    //   data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
    // },
  ],
})
