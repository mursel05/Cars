import { useEffect, useState } from "react";
import MainPage from "@/components/Mainpage";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  const [cars, setCars] = useState([]);

  async function getCars() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_KEY +
        "/GetMakesForVehicleType/car?format=json"
    );
    if (res.ok) {
      const data = await res.json();
      setCars(data.Results);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <MainPage cars={cars} />
    </MantineProvider>
  );
}
