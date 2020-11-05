import Product from "./Product";

type Demand = {
  id: string;
  name: string;
  products: Product[];
  total_cost: number;
  deadlines: string;
  address: string;
  financing_source: string;
  contact_person: string;
  creator_id: string;
  creation_date: Date;
};

export default Demand;
