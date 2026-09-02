// Script to add year field to all events
const fs = require('fs');

const file = fs.readFileSync('src/data/events.ts', 'utf8');

// Extract year from date patterns
const updates = [
  // 2025
  { id: 'sipf-2025', year: 2025 },
  { id: 'friendship-day-2025', year: 2025 },
  { id: 'digital-support-day-merikarvia-2025', year: 2025 },
  
  // 2024
  { id: 'sipf-2024', year: 2024 },
  { id: 'group-coaching-kankaanpaa-2024', year: 2024 },
  { id: 'connect-integrate-wellness-day-2024', year: 2024 },
  { id: 'degree-recognition-webinar-2024', year: 2024 },
  { id: 'qualification-recognition-webinar-2024', year: 2024 },
  { id: 'qualification-recognition-psychologists-2024', year: 2024 },
  
  // 2023
  { id: 'sipf-2023', year: 2023 },
  { id: 'connect-integrate-language-day-2023', year: 2023 },
  { id: 'improving-chances-getting-hired-2023', year: 2023 },
  
  // 2022
  { id: 'workshop-coaching-satatalents-2022', year: 2022 },
  { id: 'labour-market-seminar-2022', year: 2022 },
  
  // 2021
  { id: 'professional-accreditation-webinar-2021', year: 2021 },
  { id: '90-day-finn-beyond-2021', year: 2021 },
  
  // Unknown year (need manual check)
  { id: 'kielikaverit', year: 2024 }, // Recurring
  { id: 'connect-integrate-cv-workshop', year: 2024 },
  { id: 'career-connect', year: 2024 },
  { id: 'expand-your-network', year: 2022 },
  { id: 'job-hunting-stories-erica-terranova', year: 2023 },
  { id: 'eures-finland-works-workshop', year: 2024 },
];

let result = file;

updates.forEach(({ id, year }) => {
  // Match the event block and add year after date
  const regex = new RegExp(
    `(id: '${id}'[\\s\\S]*?date: '[^']+',)`,
    'g'
  );
  
  result = result.replace(regex, `$1\n    year: ${year},`);
});

fs.writeFileSync('src/data/events-updated.ts', result);
console.log('✓ Created events-updated.ts with year fields');
