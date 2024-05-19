export type ReduxError = {
  type: string;
  payload: string;
  meta: {
    requestId: string;
    rejectedWithValue: boolean;
    requestStatus: string;
    aborted: boolean;
    condition: boolean;
  };
  error: {
    message: string;
  };
};

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Details = {
  airConditioner: number;
  bathroom: number;
  kitchen: number;
  beds: number;
  TV: number;
  CD: number;
  radio: number;
  shower: number;
  toilet: number;
  freezer: number;
  hob: number;
  microwave: number;
  gas: string;
  water: string;
};

export type Camper = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  adults: number;
  children: number;
  engine: string;
  transmission: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: Partial<Details>;
  gallery: string[];
  reviews: Review[] | null;
};

export type CampersState = {
  items: Camper[];
  isLoading: boolean;
  error: ReduxError | null;
};

export type FavoriteState = {
  items: Camper[];
};

export type FilterState = {
  locationValue: string;
  specs: string[];
  favorite: FavoriteState;
};

export type Options = Partial<
  Pick<Camper, "form" | "transmission"> &
    Pick<Details, "TV" | "airConditioner" | "kitchen" | "shower">
>;
