export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  badge?: string;
  badgeIcon?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  icon: string;
}

export interface CalculatorItem {
  id: string;
  label: string;
  price: string;
  value: number;
}