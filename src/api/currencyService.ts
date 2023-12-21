import { API } from "../utils";

/**
 * Fetches currency values from the API and calls the provided callback function with the values.
 * @param callback - The callback function to be called with the fetched currency values.
 */
export const getCurrencyValues = async (callback: (values: any) => void) => {
  try {
    const oficialResponse = await fetch(API + "oficial");
    const oficialData = await oficialResponse.json();

    const blueResponse = await fetch(API + "blue");
    const blueData = await blueResponse.json();

    const bolsaResponse = await fetch(API + "bolsa");
    const bolsaData = await bolsaResponse.json();

    const criptoResponse = await fetch(API + "cripto");
    const criptoData = await criptoResponse.json();

    callback({
      Official: {
        compra: oficialData.compra,
        venta: oficialData.venta,
      },
      Parallel: {
        compra: blueData.compra,
        venta: blueData.venta,
      },
      MEP: {
        compra: bolsaData.compra,
        venta: bolsaData.venta,
      },
      Crypto: {
        compra: criptoData.compra,
        venta: criptoData.venta,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
