/**
 * Events Data — InterProFinland
 * Upcoming and past events, workshops, webinars, and community gatherings.
 */

export type EventType = 'flagship' | 'workshop' | 'webinar' | 'networking' | 'community' | 'seminar' | 'programme';
export type EventStatus = 'upcoming' | 'past';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  status: EventStatus;
  date: string;
  year: number;
  time: string;
  location: string;
  isOnline: boolean;
  image: string;
  registerUrl?: string;
  isFree: boolean;
  partners?: string[];
  highlights?: string[];
  targetAudience?: string;
  objectives?: string[];
  attendeeCount?: number;
  reportUrl?: string;
}

export const events: Event[] = [
  // ── ONGOING PROGRAMMES ────────────────────────────────────────────────────
  {
    id: 'career-connect-programme',
    title: 'Career Connect',
    description:
      'Career Connect is an employment program designed to enhance employability by assisting international professionals to acquire the necessary knowledge for transitioning into the Finnish workforce, fine-tune their professional skills through workshops and coaching, and participate in recruitment/matchmaking events with local companies in Satakunta.',
    type: 'programme',
    status: 'upcoming',
    date: '2022–Present',
    year: 2026,
    time: 'Ongoing',
    location: 'Satakunta Region',
    isOnline: false,
    image: '/images/events/career-connect.webp',
    isFree: true,
    partners: ['Seasons HR Management', 'Prizztech Oy', 'Finnwards', 'Talent Hub Satakunta', 'SATAtalents', 'ELY Centre'],
    highlights: [
      'Career coaching and job search strategy workshops',
      'CV optimization and personal branding guidance',
      'Direct recruitment matchmaking with local employers',
      'Understanding Finnish work culture and labour market',
      'Networking events with Satakunta companies',
    ],
  },
  {
    id: 'degree-amplify-programme',
    title: 'Degree AMPLIFY',
    description:
      'Degree AMPLIFY is an ongoing programme offering individualised assistance to international professionals who hold qualifications earned abroad and wish to have them recognised by the relevant Finnish authorities. Our team of professionals who have gone through the same process guide participants every step of the way — so no one has to navigate it alone.',
    type: 'programme',
    status: 'upcoming',
    date: 'Ongoing — yearly cohorts',
    year: 2026,
    time: '',
    location: 'Online',
    isOnline: true,
    image: '/images/events/degree-amplify.webp',
    isFree: true,
    partners: ['IWWOF – International Working Women of Finland ry', 'Finnish National Agency for Education (OPH)', 'Valvira', 'Psychological Practitioners Finland ry'],
    highlights: [
      'Over 19 people participated in the programme',
      'More than 200 registered for the Degree Recognition info webinar',
      'Finalist — ENIIE VII Call for Good Practices (Socio-Labour Inclusion category)',
      'Dedicated coaching from professionals who went through the same process',
    ],
  },
  {
    id: 'stronger-communities-programme',
    title: 'Stronger Communities',
    description:
      'Stronger Communities is an 18-month project funded by the EU (LEADER Pohjois-Satakunta) running from October 2024 to March 2026. The project addresses the challenges faced by unemployed immigrants and international professionals in Northern Satakunta, improving connections between local and international actors to build a wider network of potential employees and employers, and preventing social exclusion.',
    type: 'programme',
    status: 'upcoming',
    date: 'October 2024 – March 2026',
    year: 2026,
    time: '',
    location: 'Northern Satakunta',
    isOnline: false,
    image: '/images/events/stronger-communities.webp',
    isFree: true,
    partners: ['LEADER Pohjois-Satakunta', 'Kankaanpää', 'Jämijärvi', 'European Union'],
    highlights: [
      'Integration assessment and career planning sessions',
      'Group coaching with Nasibeh Hedayatin',
      'Digital support days across the region',
      'Multilingual outreach (Finnish, English, Ukrainian, Russian)',
    ],
  },
  {
    id: 'one-mentor-one-programme',
    title: 'One Mentor One (OmO)',
    description:
      'One Mentor One is InterProFinland\'s flagship mentorship programme pairing international professionals in Finland with experienced mentors in their field. Mentors share their experiences, widen perspectives, offer career and personal development tips, and give advice to help mentees grow. Mentorship is a positive experience for both parties.',
    type: 'programme',
    status: 'upcoming',
    date: 'Ongoing — yearly cohorts',
    year: 2026,
    time: '',
    location: 'Online & In-Person',
    isOnline: true,
    image: '/images/events/one-mentor-one.webp',
    isFree: true,
    partners: ['WOLT', 'TELUS International', 'IWWOF', 'International House Pori', 'SAMK'],
    highlights: [
      '15+ mentor-mentee pairs per cohort',
      'Structured 6-month programme with individual meetings',
      'Career workshops and live sessions with recruitment experts',
      'Open to both mentors and mentees — apply each cycle',
    ],
  },
  {
    id: 'satatalents-programme',
    title: 'SATAtalents',
    description:
      'A hundred talents for Satakunta by 2026. A 3-step pilot project run in cooperation with Prizztech and key regional partners, aimed at upskilling competence, improving employability, and ensuring the retention of international talents in the Satakunta region. The programme targets international professionals and connects them with local employers through networking events, workshops, and coaching.',
    type: 'programme',
    status: 'past',
    date: '2021 – 2023',
    year: 2023,
    time: '',
    location: 'Satakunta Region',
    isOnline: false,
    image: '/images/events/satatalents.webp',
    isFree: true,
    partners: ['Prizztech', 'SATAEDU', 'Talent Hub Satakunta', 'Robocoast', 'DIH – Digital Innovation Hub', 'ELY Centre', 'WINNOVA', 'European Social Fund'],
    highlights: [
      'Labour market seminars on Finnish work culture',
      'Networking and recruitment events with regional employers',
      'CV workshops and personal coaching sessions',
      'Expand Your Network event series',
    ],
  },
  {
    id: 'mentoring-buddy-programme',
    title: 'Mentoring Buddy',
    description:
      'Peer support programme for international students navigating higher education in Finland. Running in cooperation with Turku AMK and IWWOF, the programme matches students with mentors who provide guidance, encouragement, and practical advice throughout the academic journey.',
    type: 'programme',
    status: 'past',
    date: 'March – May 2024',
    year: 2024,
    time: '',
    location: 'Turku',
    isOnline: false,
    image: '/images/events/one-mentor-one.webp',
    isFree: true,
    partners: ['Turku AMK', 'IWWOF – International Working Women of Finland', 'Service Centre for Continuous Learning and Employment'],
    highlights: [
      'Mentors orientation and training sessions',
      '15 mentor-mentee pairs with individual meetings',
      'Focused on higher education study path support',
      'Funded by the Service Centre for Continuous Learning and Employment',
    ],
  },
  
  // ── PAST — FLAGSHIP ───────────────────────────────────────────────────────
  {
    id: 'sipf-2025',
    title: 'Satakunta International People\'s Fair 2025 (SIPF)',
    description:
      'The annual flagship event bringing together the international community and locals across Satakunta. This year hosted in Huittinen with CV workshops, mental health activities, panel discussions, awards, stand-up comedy, and cultural performances. The event is open to everyone and free of charge.',
    type: 'flagship',
    status: 'past',
    date: '9 October 2025',
    year: 2025,
    time: '15:00 – 18:00',
    location: 'Lauttakylä\'s High School, Lauttakylänkatu 22, Huittinen',
    isOnline: false,
    image: '/images/events/sipf2025-englishlangcard.webp',
    isFree: true,
    partners: ['City of Huittinen', 'INT. House Rauma', 'LEADER Pohjois-Satakunta', 'LEADER Joutsenten Reitti', 'Rauma', 'SAMK', 'WINNOVA', 'EURES', 'Europe Direct', 'Punainen Risti'],
    highlights: ['CV Workshop', 'Mental Health Activities', 'Panel Discussions', 'Free Basic Health Check', 'Awards & Recognition', 'Stand-up Comedy & Entertainment'],
  },
  
  {
    id: 'sipf-2024',
    title: 'Satakunta International People\'s Fair 2024 (SIPF)',
    description:
      'The 2024 SIPF was held on World Mental Health Day in Rauma. Highlights included a panel discussion on mental health and integration, wellness activities, cultural performances, networking with employers and partners, and the annual awards ceremony recognising outstanding contributions to inclusion in Satakunta.',
    type: 'flagship',
    status: 'past',
    date: '10 October 2024',
    year: 2024,
    time: '15:00 – 18:00',
    location: 'Poselli, Nortamonkatu 12, Rauma',
    isOnline: false,
    image: '/images/events/sipf-2024.webp',
    isFree: true,
    partners: ['Rauma', 'INT. House Rauma', 'LEADER Pohjois-Satakunta', 'samk', 'WINNOVA', 'EURES', 'Europe Direct', 'Punainen Risti', 'MIELI'],
    highlights: ['Panel: Mental Health & Integration', 'Cultural Performances', 'Awards Ceremony', 'Wellness Booth', 'Networking & Employer Stands'],
  },
  {
    id: 'sipf-2023',
    title: 'Satakunta International People\'s Fair 2023 (SIPF)',
    description:
      'The 2023 SIPF was held at Puuvilla Shopping Mall in Pori, bringing together international professionals, employers, universities, and municipal organisations. The event featured cultural performances, a full awards ceremony, and partner showcases.',
    type: 'flagship',
    status: 'past',
    date: '21 September 2023',
    year: 2023,
    time: '15:00 – 18:00',
    location: 'Puuvilla Shopping Mall, Siltapuistokatu 14, Pori',
    isOnline: false,
    image: '/images/events/sipf-2023-program.webp',
    isFree: true,
    partners: ['City of Pori', 'City of Rauma', 'City of Kokemäki', 'INT. House Rauma', 'EURES', 'SAMK', 'Sataedu', 'WinNova', 'Prizztech', 'Seasons HR', 'Punainen Risti'],
  },

  // ── PAST — COMMUNITY ──────────────────────────────────────────────────────
  {
    id: 'friendship-day-2025',
    title: 'Friendship Day',
    description:
      'A warm community gathering to spend a lovely time together, meet new people, toast to one another, and enjoy snacks. The event featured fun activities, a raffle draw for movie tickets, and a take-away surprise — a perfect way to celebrate togetherness.',
    type: 'community',
    status: 'past',
    date: '14 February 2025',
    year: 2025,
    time: '14:00 – 16:00',
    location: 'Otavatalo, Otavankatu 5A, Pori',
    isOnline: false,
    image: '/images/events/friendship-day-2025.webp',
    isFree: true,
  },
  {
    id: 'kielikaverit',
    title: 'Kielikaverit — Finnish Language Buddies',
    description:
      'A peer support club offering informal Finnish language practice for all skill levels — Basic and Advanced. Sessions are held online via Microsoft Teams on Tuesdays and Thursdays. A welcoming space to practise Finnish with native speakers and fellow international residents.',
    type: 'community',
    status: 'past',
    date: 'Every Tuesday & Thursday',
    year: 2024,
    time: '17:30 – 18:30',
    location: 'Online (Microsoft Teams)',
    isOnline: true,
    image: '/images/events/kielikaverit.webp',
    isFree: true,
  },

  // ── PAST — WORKSHOPS ──────────────────────────────────────────────────────
  {
    id: 'group-coaching-kankaanpaa-2024',
    title: 'Group Coaching — Integration Assessment & Career Planning',
    description:
      'A free group coaching session led by Nasibeh Hedayatin, helping participants assess their integration journey, identify challenges, set personal goals, and develop effective plans for successful integration into the local community and labour market.',
    type: 'workshop',
    status: 'past',
    date: '23 November 2024',
    year: 2024,
    time: '10:00 – 12:00',
    location: 'International House Kankaanpää, Keskuskatu 42',
    isOnline: false,
    image: '/images/events/group-coaching-kankaanpaa.webp',
    isFree: true,
    partners: ['LEADER Pohjois-Satakunta', 'Stronger Communities', 'Kankaanpää'],
  },
  {
    id: 'digital-support-day-merikarvia-2025',
    title: 'Digital Support Day — Merikarvia',
    description:
      'A free digital support session helping participants navigate online services: driving licences, the Commu app, and other digital tools. Organised by International Professionals Finland ry in cooperation with the Municipality of Merikarvia and Merikarvia School Centres.',
    type: 'workshop',
    status: 'past',
    date: '13 March 2025',
    year: 2025,
    time: '15:00 – 17:00',
    location: 'Merikarvia School Centre, Antintie 9, Merikarvia',
    isOnline: false,
    image: '/images/events/digital-support-daythursday13.03.2025.webp',
    isFree: true,
    partners: ['Stronger Communities', 'Municipality of Merikarvia', 'LEADER Pohjois-Satakunta'],
  },
  {
    id: 'connect-integrate-cv-workshop',
    title: 'Connect & Integrate — CV Workshop & Pitching Simulation',
    description:
      'An expert-led session helping participants revamp their CVs and take part in an interview and pitching simulation. Bring your own laptop or a hardcopy of your CV. Free Wi-Fi available at International House Pori.',
    type: 'workshop',
    status: 'past',
    date: '25 January',
    year: 2024,
    time: '17:00 – 19:00',
    location: 'International House Pori, Yrjönkatu 15A, 5th Floor, Pori',
    isOnline: false,
    image: '/images/events/cv-workshop.webp',
    isFree: true,
    partners: ['International House Pori', 'SAMK', 'PoriES'],
  },
  {
    id: 'connect-integrate-language-day-2023',
    title: 'Connect & Integrate — Language Day',
    description:
      'A session focusing on the rich beauty of the Finnish language. Participants boosted their language skills with native speakers, fostering effective communication and deeper integration into Finnish society.',
    type: 'workshop',
    status: 'past',
    date: '2 November 2023',
    year: 2023,
    time: '17:00 – 19:00',
    location: 'Kaupungin Olohuone, Isokarhu, Yrjönkatu 14, Pori',
    isOnline: false,
    image: '/images/events/language-day.webp',
    isFree: true,
    partners: ['City of Pori', 'SAMK'],
  },
  {
    id: 'connect-integrate-wellness-day-2024',
    title: 'Connect & Integrate — Wellness Day',
    description:
      'A wellness event led by Tiina Kudjoi focusing on work-life balance through movement, healthy snacks, and community connection. Grooving into good vibes — because happy feet lead to a happy heart.',
    type: 'community',
    status: 'past',
    date: '28 March 2024',
    year: 2024,
    time: '17:00 – 19:00',
    location: 'SAMK, Satakunnankatu 23, Pori',
    isOnline: false,
    image: '/images/events/wellness-day.webp',
    isFree: true,
    partners: ['SAMK', 'International House Pori'],
  },
  {
    id: 'workshop-coaching-satatalents-2022',
    title: 'Workshop + Coaching (SATAtalents)',
    description:
      'An intensive hands-on training workshop covering job hunting, personal branding, professional profile building, CV clinics, and personal career coaching. Part of the SATAtalents programme.',
    type: 'workshop',
    status: 'past',
    date: '11 April 2022',
    year: 2022,
    time: '',
    location: 'Pori',
    isOnline: false,
    image: '/images/events/cv-workshop.webp',
    isFree: true,
    partners: ['Prizztech', 'Finnwards', 'Talent Hub Satakunta', 'SATAtalents', 'ELY Centre'],
    targetAudience: 'International experts in Satakunta who are feeling a little lost in finding a job in the region, those looking to boost their job search strategy and increase their employability, and those who need personal career coaching.',
    objectives: [
      'Assist participants in fine-tuning their professional skills, work profiles and CVs',
      'Enhance employability through intensive hands-on training',
      'Learn job hunting and personal branding strategies',
      'Build professional profiles on LinkedIn and other platforms',
      'Learn how to appropriately apply for jobs in Finland using recruiting sites and available resources',
    ],
  },

  // ── PAST — NETWORKING ─────────────────────────────────────────────────────
  {
    id: 'career-connect',
    title: 'Career Connect — Meet & Greet with Seasons HR',
    description:
      'A meet & greet and recruitment event in partnership with Seasons HR Management in Pori, giving international professionals the opportunity to meet recruitment experts, attend a workshop, sign up, and find a job.',
    type: 'networking',
    status: 'past',
    date: '2 February',
    year: 2024,
    time: '14:00 – 16:00',
    location: 'Pori',
    isOnline: false,
    image: '/images/events/career-connect.webp',
    isFree: true,
    partners: ['Seasons HR Management'],
  },
  {
    id: 'expand-your-network',
    title: 'Expand Your Network (SATAtalents)',
    description:
      'A networking and recruitment event enabling international jobseekers and companies from Satakunta to meet in person, discover shared interests, and explore opportunities of mutual benefit.',
    type: 'networking',
    status: 'past',
    date: '20 May',
    year: 2022,
    time: '12:00 – 15:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/expand-your-network.webp',
    isFree: true,
    partners: ['Prizztech', 'SATAEDU', 'Talent Hub Satakunta', 'Robocoast', 'DIH', 'ELY Centre', 'WINNOVA'],
  },

  // ── PAST — WEBINARS ───────────────────────────────────────────────────────
  {
    id: 'degree-recognition-webinar-2024',
    title: 'Degree Recognition in Finland — Live Session with Opetushallitus & Valvira',
    description:
      'A comprehensive webinar covering the degree recognition process in Finland. Guest speakers from OPH (Leila Rikabi) and Valvira (Rapo Reetta-Maija) presented on authorities, processes, and best practices, followed by a live Q&A session.',
    type: 'webinar',
    status: 'past',
    date: '12 October',
    year: 2024,
    time: '15:00 – 16:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/degree-recognition-webinar.webp',
    isFree: true,
    partners: ['OPH – Finnish National Agency for Education', 'Valvira', 'IWWOF', 'Degree AMPLIFY'],
  },
  {
    id: 'qualification-recognition-webinar-2024',
    title: 'Understanding the Qualifications Recognition Process in Finland',
    description:
      'A live session with Opetushallitus featuring Sinikka Tamminen (Senior Specialist, Recognition of Qualifications and Language Proficiency, Finnish National Agency for Education). Supported by Moniheli tukee and Degree Recognition Network.',
    type: 'webinar',
    status: 'past',
    date: '26 August 2024',
    year: 2024,
    time: '14:00 – 15:30',
    location: 'Online',
    isOnline: true,
    image: '/images/events/drn-webinar.webp',
    isFree: true,
    partners: ['Moniheli tukee', 'Degree Recognition Network', 'IWWOF', 'Think Africa'],
  },
  {
    id: 'qualification-recognition-psychologists-2024',
    title: 'Qualification Recognition for Psychologists & Psychotherapists',
    description:
      'An online webinar featuring Prof. Juha Holma (University of Jyväskylä, Psykonet) and Annabel Battersby (Psychological Practitioners Finland ry) covering the qualification recognition process in Finland for psychology professionals.',
    type: 'webinar',
    status: 'past',
    date: '17 April 2024',
    year: 2024,
    time: '15:00 – 16:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/psychologists-webinar.webp',
    isFree: true,
    partners: ['Degree AMPLIFY', 'Psychological Practitioners Finland ry'],
  },
  {
    id: 'improving-chances-getting-hired-2023',
    title: 'Improving Your Chances of Getting Hired',
    description:
      'A free live session with recruitment specialists from WOLT (Katariina Saarinen & Daria Erofeeva) and TELUS International (María Kärjenniemi & Gerald Ben), discussing CV boosting, personal branding, and securing a job interview in Finland.',
    type: 'webinar',
    status: 'past',
    date: '13 February 2023',
    year: 2023,
    time: '14:00 – 15:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/livesession-improving-chances.webp',
    isFree: true,
    partners: ['One Mentor One', 'WOLT', 'TELUS International'],
  },
  {
    id: 'job-hunting-stories-erica-terranova',
    title: 'Job Hunting Stories: Erica Terranova',
    description:
      'A live online session where Erica Terranova shared her personal job hunting journey in Finland, providing practical insights and inspiration for international professionals navigating the Finnish labour market.',
    type: 'webinar',
    status: 'past',
    date: '9 November',
    year: 2023,
    time: '17:00 – 18:00',
    location: 'Microsoft Teams',
    isOnline: true,
    image: '/images/events/job-hunting-stories.webp',
    isFree: true,
  },
  {
    id: 'eures-finland-works-workshop',
    title: 'InterProFinland × EURES — Finland Works Workshop',
    description:
      'In partnership with EURES Suomi, a one-hour session covering European Job Days, the upcoming Finland Works event, and a tutorial on signing up on the European Job Days portal as a jobseeker and uploading a CV to get matched with suitable jobs.',
    type: 'webinar',
    status: 'past',
    date: '8 March',
    year: 2024,
    time: '15:00 – 16:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/finland-works.webp',
    isFree: true,
    partners: ['EURES Suomi'],
  },
  {
    id: 'professional-accreditation-webinar-2021',
    title: 'An Important Conversation About Professional Accreditation in Finland',
    description:
      'A panel webinar covering why accreditation is important for international careers in Finland and how to get international degrees recognised. Panellists included experts from Arctic Migration, TE-palvelut, IWWOF, and InterProFinland.',
    type: 'webinar',
    status: 'past',
    date: '25 August',
    year: 2021,
    time: '10:00 – 12:00',
    location: 'Online',
    isOnline: true,
    image: '/images/events/professional-accreditation.webp',
    isFree: true,
    targetAudience: 'International community members who have skills gained abroad but are unable to use their skills in Finland.',
    objectives: [
      'Create awareness about international degree accreditation in Finland',
      'Explain why professional accreditation is important for international careers',
      'Guide participants on how to get international degrees recognised',
      'Share experiences and practical advice from panel experts',
      'Answer questions about the accreditation process',
    ],
  },
  {
    id: '90-day-finn-beyond-2021',
    title: '90 Day Finn and Beyond',
    description:
      'A discussion on Clubhouse exploring how programmes like 90 Day Finn could create new opportunities for international professionals already living in Finland, with organisers from Helsinki Business Hub, InterProFinland, and the Finns & Foreigners Club.',
    type: 'seminar',
    status: 'past',
    date: '22 September 2021',
    year: 2021,
    time: '18:30 Helsinki time',
    location: 'Clubhouse — The Finns & Foreigners Club',
    isOnline: true,
    image: '/images/events/90-day-finn.webp',
    isFree: true,
    partners: ['Helsinki Business Hub', 'Finns & Foreigners Club'],
    targetAudience: 'International professionals already living in Finland, 90 Day Finn participants, programme organisers, and the general public interested in integration and talent retention.',
    objectives: [
      'Explore how programmes like 90 Day Finn could offer new opportunities for international professionals in Finland',
      'Discuss ways future programs could recognise and include international talents already in Finland',
      'Share insights and suggestions on inclusion in programmes',
      'Create dialogue between programme organisers, participants, and community members',
    ],
    attendeeCount: 30,
  },

  // ── PAST — SEMINARS ───────────────────────────────────────────────────────
  {
    id: 'labour-market-seminar-2022',
    title: 'Finnish Labour Market & Work Culture Seminar',
    description:
      'A seminar for unemployed and underemployed immigrants in Satakunta, covering the Finnish labour market, work culture, career building, and practical tools to navigate the job market. Part of the SATAtalents programme.',
    type: 'seminar',
    status: 'past',
    date: '15 March 2022',
    year: 2022,
    time: '10:00 – 12:00',
    location: 'Crazy Town, Pori',
    isOnline: false,
    image: '/images/events/labour-market-seminar.webp',
    isFree: true,
    partners: ['SATAtalents', 'Prizztech', 'SATAEDU', 'European Social Fund'],
    targetAudience: 'Immigrants and internationals in Satakunta region who are unemployed, underemployed or working outside the scope of their expertise.',
    objectives: [
      'Create awareness about working in Finland and the Finnish labour market',
      'Understand Finnish work culture and professional expectations',
      'Learn about career building strategies in Finland',
      'Explore alternative or related career paths in Finland',
      'Discover practical ways and tools to navigate Finnish labour market challenges',
      'Overcome barriers encountered by immigrants in the region',
    ],
  },
];

// Helpers
export const upcomingEvents = events.filter((e) => e.status === 'upcoming');
export const pastEvents = events.filter((e) => e.status === 'past');
export const flagshipEvents = events.filter((e) => e.type === 'flagship');

// Get unique years from events (sorted descending)
export const eventYears = Array.from(new Set(events.map(e => e.year)))
  .filter(y => y !== undefined)
  .sort((a, b) => b - a);

// Get events by year
export const getEventsByYear = (year: number) => 
  events.filter(e => e.year === year);

// Get events sorted by year (newest first)
export const eventsByYear = [...pastEvents].sort((a, b) => {
  // Sort by year descending (2025 → 2021)
  if (b.year !== a.year) return b.year - a.year;
  
  // If same year, try to sort by month (parse date string)
  const monthsOrder = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'] as const;
  
  const getMonthIndex = (dateStr: string | undefined) => {
    if (!dateStr) return 0;
    for (let i = 0; i < monthsOrder.length; i++) {
      const month = monthsOrder[i];
      if (month && dateStr.includes(month)) return i;
    }
    return 0;
  };
  
  return getMonthIndex(b.date) - getMonthIndex(a.date);
});

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  flagship: 'Flagship Event',
  workshop: 'Workshop',
  webinar: 'Webinar',
  networking: 'Networking',
  community: 'Community',
  seminar: 'Seminar',
  programme: 'Programme',
};
