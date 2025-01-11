export const productValidation = (products: {
  title: string;
  img: string;
  details: string;
  price: string;
}) => {
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(products.img);

  const errors: { img: string; details: string; price: string; title: string } =
    {
      title: "",
      details: "",
      img: "",
      price: "",
    };
  if (
    !products.title.trim() ||
    products.title.length < 10 ||
    products.title.length > 80
  ) {
    errors.title = "product must be between 10 and 80 characters ! ";
  }

  if (
    !products.details.trim() ||
    products.details.length < 10 ||
    products.details.length > 900
  ) {
    errors.details = "product must be between 10 and 900 characters ! ";
  }

  if (!products.img.trim() || !validUrl) {
    errors.img = "enter a valid URL";
  }

  if (!products.price.trim() || isNaN(Number(products.price))) {
    errors.price = "input a number ";
  }
  return errors;
};
