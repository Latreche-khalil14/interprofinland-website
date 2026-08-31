/**
 * stories.ts — InterProFinland
 * Centralized data for all member stories / testimonials.
 * Used by /stories index and /stories/[id] pages.
 */

export interface StoryQA {
  q: string;
  a: string;
}

export interface Story {
  id: string;
  name: string;
  role: string;
  origin: string;
  field: string;
  program: 'Degree Recognition' | 'Degree Amplify' | 'One Mentor One' | 'SATAtalents';
  tag: string;
  tagColor: 'blue' | 'green' | 'gold' | 'purple' | 'slate';
  image: string;
  linkedin: string | null;
  /** Short headline for card / featured block */
  headline: string;
  /** Short pull-quote for card */
  pullQuote: string;
  /** 1–2 sentence summary for card */
  summary: string;
  /** Full Q&A for the individual story page */
  fullStory: StoryQA[];
  /** Mark as the featured story on the index page */
  isFeatured?: boolean;
}

export const TAG_COLORS: Record<Story['tagColor'], { bg: string; text: string }> = {
  blue:   { bg: '#EEF2FF', text: '#1E3A8A' },
  green:  { bg: '#F0FDF4', text: '#166534' },
  gold:   { bg: '#FFFBEB', text: '#92400E' },
  purple: { bg: '#F5F3FF', text: '#6D28D9' },
  slate:  { bg: '#F8FAFC', text: '#334155' },
};

export const PROGRAM_LABELS: Record<Story['program'], string> = {
  'Degree Recognition': 'Degree Recognition',
  'Degree Amplify':     'Degree Amplify Program',
  'One Mentor One':     'One Mentor One',
  'SATAtalents':        'SATAtalents',
};

export const stories: Story[] = [
  /* ── FEATURED ─────────────────────────────────────────────────────────── */
  {
    id: 'cyrille',
    name: 'Cyrille',
    role: 'International Professional',
    origin: 'International',
    field: 'Career Development',
    program: 'One Mentor One',
    tag: 'Mentorship',
    tagColor: 'gold',
    image: '/assets/persons-rols/Cyrille.webp',
    linkedin: null,
    isFeatured: true,
    headline: 'Navigating Diploma Recognition with 1-on-1 Mentorship',
    pullQuote: 'I was able to save time because my mentor knows how the diploma equivalency process works. This mentorship accelerated my integration.',
    summary: 'Cyrille gained both confidence and speed in his Finnish integration process thanks to targeted guidance from his One Mentor One program advisor.',
    fullStory: [
      {
        q: 'How did the mentorship program help your integration?',
        a: 'I was able to save time because my mentor knows how the diploma equivalency process works and gave me great advice about it. This mentorship made me gain confidence in my integration process and therefore accelerated it. Many foreigners arriving in Finland do not know about qualification recognition, and hence their integration process becomes more complicated and slower.',
      },
    ],
  },

  /* ── REST ─────────────────────────────────────────────────────────────── */
  {
    id: 'junior-perri',
    name: 'Junior Perri',
    role: 'Architect',
    origin: 'Italy',
    field: 'Architecture',
    program: 'Degree Recognition',
    tag: 'OPH Recognition',
    tagColor: 'blue',
    image: '/assets/persons-rols/Junior-Perry.webp',
    linkedin: 'https://www.linkedin.com/in/juniorperri',
    headline: 'Recognised as an Architect in Finland in Just 20 Days',
    pullQuote: 'To integrate in the Finnish Architecture community, participation and commitment are the key.',
    summary: 'Junior successfully had his Italian Master degree in Architecture recognised in Finland through OPH — in just 20 days.',
    fullStory: [
      {
        q: 'How does it feel to get licensed to practice in Finland?',
        a: 'I am happy to have reached this milestone and it felt a bit like a relief. Architect is a title that is linked to the profession, so to be an architect you need to be recognised as that by the state in which you are practising. But first of all we are architectural workers, and in Finland most architects work in salaried jobs.',
      },
      {
        q: 'What challenges did you face during the qualification recognition process?',
        a: 'The recognition of a degree from another EU country (Italy in my case) is a pretty straightforward process, done in accordance with Directive 36/2005/EU. Preliminary they said that the process could have been 3 months long, it actually lasted only 20 days since I first opened the application. The person in charge from Opetushallitus has been really helpful and answered promptly to my questions.',
      },
      {
        q: 'How will your experience from abroad contribute to your work in Finland?',
        a: 'From studies and work experience back home I gained valuable experiences of interdisciplinarity with other fields of engineering and prime hand exposure to construction. Those experiences helped me several times overcome language barriers here in Finland. I can also contextualise and assess critically what might be thought as a matter of fact and bring other options to the table due to a different sensibility.',
      },
      {
        q: 'What advice would you give to other international professionals?',
        a: 'Start the process as soon as you can. Once your degree is recognised you can apply for joining the professional union of your field, in my example SAFA, the Finnish Association of Architects. The process is simple: provide Opetushallitus official degree certificates and pay the fees.',
      },
    ],
  },
  {
    id: 'svetlana-bilevich',
    name: 'Svetlana Bilevich',
    role: 'Psychotherapist',
    origin: 'Europe',
    field: 'Healthcare',
    program: 'Degree Amplify',
    tag: 'Valvira License',
    tagColor: 'green',
    image: '/assets/persons-rols/Svetlana Bilevich.webp',
    linkedin: 'https://www.linkedin.com/in/svetlana-bilevich-151600272/',
    headline: 'Overcoming Valvira Rejection to Practise as a Psychotherapist',
    pullQuote: 'I feel like a hero. Do not be afraid to ask for help.',
    summary: 'Svetlana overcame a Valvira rejection through persistence and community support, eventually receiving her psychotherapy licence in Finland.',
    fullStory: [
      {
        q: 'How does it feel to get licensed to practice in Finland?',
        a: 'Obviously, I feel like a hero, who has gone through all these challenges. The first huge disappointment was when Valvira refused to accept my European certificate of psychotherapy. The main challenges were bureaucratic hurdles and adapting to local standards.',
      },
      {
        q: 'What helped you overcome these difficulties?',
        a: 'The support from my friends, colleagues, and my own persistence and self-belief helped me overcome these difficulties. I was searching for help everywhere. This is how I found Annabel and PPF, my assistant and a lot of support and friends.',
      },
      {
        q: 'What advice would you give to other international professionals?',
        a: 'Do not be afraid to ask for help.',
      },
    ],
  },
  {
    id: 'mariam',
    name: 'Mariam',
    role: 'Electrical Engineer',
    origin: 'International',
    field: 'Engineering',
    program: 'Degree Amplify',
    tag: 'OPH Recognition',
    tagColor: 'blue',
    image: '/assets/persons-rols/Mariam.webp',
    linkedin: null,
    headline: 'Understanding OPH and Regulated Professions Through Degree Amplify',
    pullQuote: 'Taking part in the Degree Amplify project opened my eyes to information I did not know before.',
    summary: 'Mariam discovered how OPH works, what regulated professions mean in Finland, and the role of ELY-Keskus — all through the Degree Amplify program.',
    fullStory: [
      {
        q: 'What did you learn from the Degree Amplify project?',
        a: 'Taking part in the Degree Amplify project opened my eyes to information I did not know before. I got to understand the main idea about recognition of diplomas in Finland, Opetushallitus (OPH), and what are regulated professions in Finland, and details related to my diploma in electrical engineering.',
      },
      {
        q: 'What specific challenges did you face?',
        a: 'It was a challenge for me to find out that I do not qualify for the TE toimisto training because I have already lived in Finland for more than 3 years. So I have to pay for the application fees by myself because I need to get my diploma recognized to move on to the next steps in my career.',
      },
    ],
  },
  {
    id: 'kristina',
    name: 'Kristina',
    role: 'Psychologist',
    origin: 'International',
    field: 'Healthcare',
    program: 'Degree Amplify',
    tag: 'Valvira License',
    tagColor: 'green',
    image: '/assets/persons-rols/Kristina.webp',
    linkedin: null,
    headline: 'Finding the Courage to Restart the Licensing Process',
    pullQuote: 'Having someone to guide you is great support mentally and also an opportunity to meet new friends.',
    summary: 'Kristina found the courage to restart her Finnish licensing process through a Degree Amplify mentor who gave her practical and emotional support.',
    fullStory: [
      {
        q: 'What was your experience trying to get your diploma recognized?',
        a: 'I found out that I need to apply for a license from Valvira, in order to work as a psychologist in Finland. This was something new and confusing for me. I tried a couple of times to start the process, but I always felt alone not knowing where to start.',
      },
      {
        q: 'How did the Degree Amplify project help you?',
        a: 'With Degree Amplify, my mentor gave me the courage to continue with the process, focusing on the things that I already have. She provided me with new information and answered all my worries and questions. Having someone to guide you is great support mentally.',
      },
    ],
  },
  {
    id: 'kelly',
    name: 'Kelly',
    role: 'International Professional',
    origin: 'International',
    field: 'Career Development',
    program: 'One Mentor One',
    tag: 'Mentorship',
    tagColor: 'gold',
    image: '/assets/persons-rols/Kelly.webp',
    linkedin: null,
    headline: 'Discovering Professional Interests Through Mentorship',
    pullQuote: 'Identifying your competencies and interests lets you align your career and feel more motivated to grow.',
    summary: 'Through the One Mentor One program, Kelly discovered her professional interests and found strategies to overcome career challenges in Finland.',
    fullStory: [
      {
        q: 'How did the mentorship program benefit you?',
        a: 'Through this mentorship program, she discovered her interests and overcame some work-related challenges. When identifying competencies and interests, individuals can align their careers with them and feel more motivated to acquire relevant knowledge and skills and set high career objectives.',
      },
      {
        q: 'What was the impact of working through challenges with a mentor?',
        a: 'We all face work-related challenges, sometimes to a big, sometimes to a small extent. It is good to discuss them with peers and find a way with their help to overcome them, as it is part of our professional journey.',
      },
    ],
  },
  {
    id: 'maha',
    name: 'Maha',
    role: 'International Professional',
    origin: 'International',
    field: 'Career Development',
    program: 'SATAtalents',
    tag: 'SATAtalents',
    tagColor: 'purple',
    image: '/assets/persons-rols/Maha.webp',
    linkedin: null,
    headline: 'Finding an Employer at an InterProFinland Networking Event',
    pullQuote: 'If you need any support, feel free to reach out. They are as helpful as good family members.',
    summary: 'Maha connected with her employer at an InterProFinland networking event in Pori — a meeting that changed the trajectory of her career.',
    fullStory: [
      {
        q: 'How did InterProFinland change your journey?',
        a: 'I met my employer Spear Innovations at a networking event held by International Professionals Finland ry in Pori. And I will be forever thankful they saw past the language barrier. To the world, this is no major news. To me, I know this is a matter of trajectory, and it put me on the right one.',
      },
      {
        q: 'What would you say to someone considering joining?',
        a: 'If you need any support, or have any questions, feel free to reach out to the organization, they are as helpful as good family members.',
      },
    ],
  },
  {
    id: 'jichen',
    name: 'Jichen',
    role: 'International Professional',
    origin: 'International',
    field: 'Career Development',
    program: 'SATAtalents',
    tag: 'SATAtalents',
    tagColor: 'purple',
    image: '/assets/persons-rols/Jichen.webp',
    linkedin: null,
    headline: 'Building Career Confidence as an International Student in Finland',
    pullQuote: 'I highly recommend everyone to get involved. You will gain more than you think.',
    summary: 'Jichen found his current job and built career confidence through SATAtalents, crediting the community with helping him stay resilient.',
    fullStory: [
      {
        q: 'How did the SATAtalents project help your career?',
        a: 'This project largely helped me to develop my career. I received support and encouragement from Olivia Kumpula, CEO of International Professionals Finland ry, and my career coach Minna Franck. This project helped me to find my current job to some extent.',
      },
      {
        q: 'What would you tell other international students in Finland?',
        a: 'I highly recommend everyone to get involved in events like the SATAtalents project, you will gain more than you think. As an international student in Finland, I understand very well that living in another country you will encounter many challenges, so it is important to have an optimistic mind.',
      },
    ],
  },
];

export const featuredStory = stories.find((s) => s.isFeatured)!;
export const remainingStories = stories.filter((s) => !s.isFeatured);
