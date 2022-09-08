import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import {
  CreateUserView,
  ErrorView,
  HomeView,
  UserDetailsView,
  UsersView,
  UsersWrapper,
} from "./views";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />

          <Route path="users" element={<UsersWrapper />}>
            <Route index element={<UsersView />} />
            <Route path=":userId" element={<UserDetailsView />} />
            <Route path="new" element={<CreateUserView />} />
          </Route>

          <Route path="error" element={<ErrorView />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
