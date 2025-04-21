export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  age: number;
  height: number;
  bio: string;
  rating: number;
  imageUrl: string;
  featured: boolean;
  international: boolean;
  type: 'player' | 'coach';
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatarUrl: string;
}