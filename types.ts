
export interface Station {
  id: string;
  name: string;
  frequencies: string[];
  tagline: string;
  streamUrl: string;
  backupUrl?: string;
  accentColor: string;
  logo: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Show {
  id: string;
  title: string;
  host: string;
  tags: string[];
  description: string;
  image: string;
  stationIds: string[];
  schedule: string; // e.g., "Mon-Fri 6AM - 10AM"
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: 'Sports' | 'Music' | 'Local' | 'Weather';
  excerpt: string;
  content: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  logo: string;
  link: string;
}

export interface Artist {
  id: string;
  name: string;
  blurb: string;
  image: string;
}

export interface SportsGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  category: 'Local' | 'College';
  status: 'Upcoming' | 'Live' | 'Final';
  score?: string;
}
