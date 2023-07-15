import { type NextPage } from "next";
import Head from "next/head";
import DarkMode from "./DarkMode";
import { api } from "~/utils/api";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./LandingPage";
import SearchForm from "./SearchForm";
import MacroPage from "./MacroPage";

const navigationLinks = [
  { label: 'HOME', path: '/' },
  { label: 'SEARCH', path: '/search' },
  { label: 'MACROS', path: '/macros' },
];

const Home: NextPage = () => {
  // TODO: not using tprc for now, uncomment when need.
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="min-h-screen">
      <Head>
        <title>Plan - Prep - EAT!</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Router>
        <div className="flex justify-evenly bg-purple-300 dark:bg-purple-900">
        <div className="flex flex-col sm:flex-row status h-20 w-full items-center justify-evenly  sm:h-24">
        {navigationLinks.map((link) => (
              <Link
                key={link.path}
                className="hover:text-purple-700 hover:decoration-solid dark:text-white dark:hover:text-purple-300"
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
        </div>
        <div className="flex items-center"><DarkMode /></div>
        </div>
        
          <Routes>
            <Route path="/search" element={<SearchForm />} />
            <Route path="/macros" element={<MacroPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </Router>
    </div>
  );
};

export default Home;
