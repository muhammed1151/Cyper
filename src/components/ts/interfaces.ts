export interface ICategory {
  icon: string;
  name: string;
}
export interface IProducts {
  img: string;
  details: string;
  price: string;
  title: string;
  id?: string;
  name: string;
}
export interface ITags {
  srcImg: string;
  name: string;
  details: string;
  backgroundColor?: string;
}
export interface IPopUp {
  id: string;
  label: string;
  name: "details" | "title" | "img" | "price";
  type: string;
}
