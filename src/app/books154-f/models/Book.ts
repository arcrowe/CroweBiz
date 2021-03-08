export interface Book {
  title: string;
  isbn: string;
  authors: string;
  short_description: string;
  subtitle: string;
  long_description: string;
  publisher: string;
  publishedDate: Date;
  category: string;
  cover: string;
  format: string;
  inStockNumber: number;
  language: string;
  numberSold: number;
  pageCount: number;
  price: number;

  // constructor(imageUrl: string) {
  //   this.imageUrl = imageUrl;
  // }
}
