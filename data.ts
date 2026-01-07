
import { Station, Staff, Show, NewsPost, Event, Sponsor, Artist, SportsGame } from './types';

export const STATIONS: Station[] = [
  {
    id: 'fm95',
    name: 'FM95',
    frequencies: ['95.5 FM'],
    tagline: 'Brooklyn\'s Home for Hits & Sports',
    streamUrl: 'https://stream.fm95.com/live',
    accentColor: '#F97316',
    logo: 'https://picsum.photos/seed/fm95/200/200'
  },
  {
    id: 'wamy',
    name: 'WAMY',
    frequencies: ['96.5 FM', '1580 AM'],
    tagline: 'The Heart of Classic Country',
    streamUrl: 'https://stream.wamy.com/live',
    accentColor: '#FBBF24',
    logo: 'https://picsum.photos/seed/wamy/200/200'
  },
  {
    id: 'wwzq',
    name: 'WWZQ',
    frequencies: ['1240 AM'],
    tagline: 'Brooklyn Talk & Local News',
    streamUrl: '',
    accentColor: '#1F2937',
    logo: 'https://picsum.photos/seed/wwzq/200/200'
  }
];

export const STAFF: Staff[] = [
  {
    id: 'gregory-v',
    name: 'Gregory Vekker',
    role: 'Owner & President',
    bio: 'Gregory has over 30 years of experience in New York broadcasting.',
    image: 'https://picsum.photos/seed/staff1/400/400'
  },
  {
    id: 'ed-s',
    name: 'ED Stanford',
    role: 'Program Director',
    bio: 'Ed oversees the daily sound of FM95 and WAMY.',
    image: 'https://picsum.photos/seed/staff2/400/400'
  },
  {
    id: 'byron-c',
    name: 'Byron Coker',
    role: 'Sales & Marketing',
    bio: 'Byron helps local businesses grow through targeted radio advertising.',
    image: 'https://picsum.photos/seed/staff3/400/400'
  }
];

export const SHOWS: Show[] = [
  {
    id: 'morning-rush',
    title: 'The Brooklyn Morning Rush',
    host: 'Dave Michaels',
    tags: ['Talk', 'Hits', 'Local'],
    description: 'The definitive way to start your day in Brooklyn.',
    image: 'https://picsum.photos/seed/show1/600/400',
    stationIds: ['fm95'],
    schedule: 'Mon-Fri 6AM - 10AM'
  },
  {
    id: 'classic-country-noon',
    title: 'High Noon Classics',
    host: 'Saddleback Sue',
    tags: ['Country', 'Classic'],
    description: 'Nothing but the greatest legends of country music.',
    image: 'https://picsum.photos/seed/show2/600/400',
    stationIds: ['wamy'],
    schedule: 'Mon-Fri 12PM - 2PM'
  },
  {
    id: 'brooklyn-sports-hub',
    title: 'Brooklyn Sports Hub',
    host: 'Coach Rick',
    tags: ['Sports', 'Talk'],
    description: 'Deep dives into local high school and college athletics.',
    image: 'https://picsum.photos/seed/show3/600/400',
    stationIds: ['fm95', 'wwzq'],
    schedule: 'Mon-Fri 4PM - 6PM'
  }
];

export const ARTISTS: Artist[] = [
  { id: '1', name: 'Johnny Cash', blurb: 'The Man in Black, a definitive voice in country music history.', image: 'https://picsum.photos/seed/cash/300/300' },
  { id: '2', name: 'Dolly Parton', blurb: 'The undisputed Queen of Country, known for her songwriting and philanthropy.', image: 'https://picsum.photos/seed/dolly/300/300' },
  { id: '3', name: 'Willie Nelson', blurb: 'A pioneer of outlaw country with an unmistakable voice and guitar style.', image: 'https://picsum.photos/seed/willie/300/300' },
  { id: '4', name: 'Loretta Lynn', blurb: 'The Coal Miner\'s Daughter who brought raw honesty to the genre.', image: 'https://picsum.photos/seed/loretta/300/300' },
  { id: '5', name: 'Waylon Jennings', blurb: 'A cornerstone of the outlaw country movement.', image: 'https://picsum.photos/seed/waylon/300/300' },
  { id: '6', name: 'Patsy Cline', blurb: 'One of the most influential vocalists of the 20th century.', image: 'https://picsum.photos/seed/patsy/300/300' },
  { id: '7', name: 'Hank Williams', blurb: 'The father of modern country music.', image: 'https://picsum.photos/seed/hank/300/300' },
  { id: '8', name: 'Tammy Wynette', blurb: 'The First Lady of Country Music.', image: 'https://picsum.photos/seed/tammy/300/300' },
  { id: '9', name: 'Merle Haggard', blurb: 'The poet of the common man.', image: 'https://picsum.photos/seed/merle/300/300' },
  { id: '10', name: 'George Jones', blurb: 'Often cited as the greatest living country singer during his time.', image: 'https://picsum.photos/seed/george/300/300' },
  { id: '11', name: 'Kenny Rogers', blurb: 'The Gambler who successfully crossed over into pop while staying true to country roots.', image: 'https://picsum.photos/seed/kenny/300/300' },
  { id: '12', name: 'Glen Campbell', blurb: 'A virtuoso guitarist and beloved television personality.', image: 'https://picsum.photos/seed/glen/300/300' }
];

export const NEWS: NewsPost[] = [
  {
    id: 'news-1',
    title: 'Brooklyn College Panthers Clinch Playoffs',
    date: '2025-10-24',
    category: 'Sports',
    excerpt: 'A stunning last-minute field goal secured the victory for the Panthers this weekend.',
    content: 'The atmosphere at the stadium was electric as the Panthers fought through a grueling fourth quarter...',
    image: 'https://picsum.photos/seed/news1/800/600'
  },
  {
    id: 'news-2',
    title: 'WAMY Festival Announced for Summer 2026',
    date: '2025-10-22',
    category: 'Music',
    excerpt: 'The biggest classic country festival in the tri-state area is returning to Brooklyn.',
    content: 'Gregory Vekker announced today that the annual WAMY Summer Jam will feature three stages...',
    image: 'https://picsum.photos/seed/news2/800/600'
  }
];

export const GAMES: SportsGame[] = [
  { id: 'g1', homeTeam: 'Brooklyn Knights', awayTeam: 'Queens Kings', date: 'Oct 30', time: '7:00 PM', category: 'Local', status: 'Upcoming' },
  { id: 'g2', homeTeam: 'State University', awayTeam: 'Metro Tech', date: 'Oct 28', time: '2:00 PM', category: 'College', status: 'Live', score: '24 - 21' },
];

export const SPONSORS: Sponsor[] = [
  { id: 's1', name: 'Brooklyn Auto Group', tier: 'Platinum', logo: 'https://picsum.photos/seed/auto/150/80', link: '#' },
  { id: 's2', name: 'Downtown Diner', tier: 'Gold', logo: 'https://picsum.photos/seed/diner/150/80', link: '#' },
];
