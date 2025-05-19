export const CheckEnv = () => {

  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  } else {
    return "There is some problem in loading .env file";
  }
};

