import { baseRestClient } from "services/client";
import { Coffee, ICoffeeApi } from "models";

interface CoffeeResult {
  fetchRandomCoffee: () => Promise<Coffee | null>;
  fetchCoffeeImage: () => Promise<string | null>;
}

export const useCoffee = (): CoffeeResult => {
  const fetchRandomCoffee = async () => {
    const response = await baseRestClient.request<ICoffeeApi, any>("https://random-data-api.com/api/coffee/random_coffee");

    if (response.success) {
      return new Coffee(response.right);
    } else {
      return null;
    }
  };

  const fetchCoffeeImage = async () => {
    const response = await baseRestClient.requestImage<any>("https://loremflickr.com/500/500/coffeebean");

    if (response.success) {
      return URL.createObjectURL(response.right);
    } else {
      return null;
    }
  };

  return { fetchRandomCoffee, fetchCoffeeImage };
};
