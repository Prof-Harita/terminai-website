export interface Item {
  title: string;
  slug: string;
  description?: string;
}

export interface DocSection {
  title: string;
  items: Item[];
}
