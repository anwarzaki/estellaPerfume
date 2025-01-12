// 3. pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddPerfumeForm from "../components/AddPerfume";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[64px] p-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link
            to="/products"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Products
          </Link>
        </div>
        <AddPerfumeForm />
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
