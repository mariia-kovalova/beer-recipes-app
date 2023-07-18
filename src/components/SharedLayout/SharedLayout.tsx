import { FC, Suspense } from "react";
import { Outlet } from "react-router";
import { Grid } from "./SharedLayout.styled";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Loader } from "../Loader";

export const SharedLayout: FC = () => (
  <Grid>
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </Grid>
);
