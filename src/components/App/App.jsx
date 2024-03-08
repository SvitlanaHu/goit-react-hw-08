import { lazy } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout } from "../Layout/Layout";
import { useAuth } from "../../hooks";
import { refreshUser } from "../../redux/auth/operations";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import RefreshingPage from "../RefreshingPage/RefreshingPage";
import NotFound from "../NotFound/NotFound";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshingPage />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;


