export interface Book {
  _id: string;
  title: string;
  slug: string;
  abstractText: string;
  author: string;
  price: number;
  defaultCategory: string;
  description: string;
  image: string;
  isInStock: boolean;
  mainGenre: string;
  synopsis: string;
  badges?: string[];
  informers?: string[];
}
