export const getVerticalBarChartData = (themes) => ({
  labels: ['Erica', 'Ferren', 'Michael', 'Asland', 'Moses', 'Jordan', 'Jhon', 'Arlen', 'Bram', 'Kezia'],
  datasets: [
    {
      label: 'VOTE',
      backgroundColor: themes.info,
      borderColor: 'transparent',
      data: [50, 67, 89, 39, 100, 40, 39, 80, 40, 70],
    },
  ],
})
