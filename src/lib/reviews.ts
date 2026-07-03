export interface Review {
  author: string;
  company: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date?: string;
}

// Tømmes bevisst: ingen oppdiktede sitater. Fylles inn når klient leverer ekte,
// tillatelses-kontrollerte kundesitater. TestimonialsSection rendres ikke før da.
export const reviews: Review[] = [];
