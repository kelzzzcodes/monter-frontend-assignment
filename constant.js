export const dialogueHeading = ['Date', 'Report Name', 'Download']

export const dialogueData = [
  {
    date: { year: '3/12/2022', time: '10:45:00 AM' },
    reportName: 'Report_abc123.csv',
    download: '📂',
  },
  {
    date: { year: '7/8/2022', time: '03:20:00 PM' },
    reportName: 'Report_xyz456.pdf',
    download: '📄',
  },
  {
    date: { year: '1/30/2022', time: '08:00:00 AM' },
    reportName: 'Report_def789.mp4',
    download: '🎥',
  },
]

// Adding more data objects to reach a total of 20
for (let i = 3; i <= 50; i++) {
  dialogueData.push({
    date: { year: '1/1/2022', time: '12:00:00 PM' },
    reportName: `Report_${i + 1}.csv`,
    download: '📂',
  })
}

// console.log( dialogueData)
let myVariable = dialogueData
console.log(typeof myVariable)
