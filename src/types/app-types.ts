// Review Type for individual product reviews
export type Review = {
  rating: number; // Rating for the product
  comment: string; // Review comment
  date: string; // Date of the review
  reviewerName: string; // Name of the reviewer
  reviewerEmail: string; // Email of the reviewer
};

// ProductPage Type for product details
export type Product = {
  title: string; // Title of the product
  description: string; // Description of the product
  category: string; // Category the product belongs to
  price: number; // Price of the product
  rating: number; // Overall rating of the product
  reviews: Review[]; // Array of product reviews
  images: string[]; // Array of image URLs for the product
};

// BidProduct Type for bid-enabled product details
export type BidProduct = {
  title: string; // Title of the bid product
  description: string; // Description of the bid product
  category: string; // Category the bid product belongs to
  price: number; // Starting price of the bid product
  images: string[]; // Array of image URLs for the bid product

  // Additional bid-specific attributes
  currentBidPrice: number; // Current highest bid for the product
  bidStartTime: Date; // Date and time when bidding starts
  bidEndTime: Date; // Date and time when bidding closes
  isClosed: boolean; // Indicates if the bid has ended
};

// Location Type, as provided
export type Location = {
  id: number; // Unique identifier for each location
  name: string; // Name of the location
  pickupStations: string[]; // Array of pickup stations
  slug: string; // URL-friendly identifier for the location
  description: string; // Description of the location
};
