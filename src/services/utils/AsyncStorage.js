import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAysnc = async (key, data) => {
  try {
    let value = data;
    if (typeof value !== "string") {
      value = JSON.stringify(data);
    }
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const getAsync = async (key, isParsed = false) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data && isParsed) {
      data = JSON.parse(data);
    }
    return data;
  } catch (error) {
    console.warn("Async Error get error", error);
  }
};

export const removeAsync = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn("Async Error remove error", error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.warn("Async Error while clearing", error);
  }
  return {};
};
