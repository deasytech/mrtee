type TCategory = {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: TProduct[];
  createdAt: Date;
}

type TCollection = {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: TProduct[];
  createdAt: Date;
}

type TProduct = {
  _id: string;
  title: string;
  description: string;
  media: [ string ];
  category: string;
  collections: [ TCollection ];
  tags: [ string ];
  sizes: [ string ];
  colors: [ string ];
  price: number;
  featured: boolean;
  createdAt: Date;
}

type TCustomerOrder = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  products: [ TOrder ]
  shippingRate: string;
  totalAmount: number
}

type TUser = {
  clerkId: string;
  wishList: [ string ];
  createdAt: string;
}

type TOrderColumn = {
  _id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
}

type TOrder = {
  product: TProduct
  size: string;
  quantity: number;
}

type TCustomer = {
  clerkId: string;
  name: string;
  email: string;
}