import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QueryForm from "./components/QueryForm";
import QueryList from "./components/QueryList";
import QueryDetail from "./components/QueryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "#ddd" }}>
        <Link to="/">Dashboard</Link> | 
        <Link to="/new"> New Query</Link> | 
        <Link to="/queries"> Queries</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<QueryForm />} />
        <Route path="/queries" element={<QueryList />} />
        <Route path="/query" element={<QueryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
