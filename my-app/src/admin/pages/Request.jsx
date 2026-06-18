import { useState } from "react";
import { motion } from "framer-motion";

const requestsData = [
  {
    id: 1,
    name: "John Doe",
    phone: "09012345678",
    service: "Cleaning",
    amount: 25000,
    status: "pending",
    date: "2026-05-20"
  },
  {
    id: 2,
    name: "Mary Jane",
    phone: "08087654321",
    service: "Food",
    amount: 40000,
    status: "completed",
    date: "2026-05-21"
  },
  {
    id: 3,
    name: "David James",
    phone: "07099887766",
    service: "Media",
    amount: 60000,
    status: "pending",
    date: "2026-05-22"
  }
];

function Requests() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // FILTER LOGIC
  const filteredRequests = requestsData.filter((req) => {
    return (
      (serviceFilter === "all" || req.service === serviceFilter) &&
      (statusFilter === "all" || req.status === statusFilter)
    );
  });

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">All Requests</h1>

      {/* ===== FILTERS ===== */}
      <div className="flex flex-wrap gap-4">

        {/* Service Filter */}
        <select
          onChange={(e) => setServiceFilter(e.target.value)}
          className="bg-slate-900 border border-white px-4 py-2 rounded"
        >
          <option value="all">All Services</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Food">Food</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Media">Media</option>
        </select>

        {/* Status Filter */}
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-slate-900 border border-slate-800 px-4 py-2 rounded"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

      </div>

      {/* ===== TABLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 p-6 rounded-xl border border-slate-800 overflow-x-auto"
      >
        <table className="w-full text-sm">

          <thead className="text-slate-400 border-b border-slate-800">
            <tr>
              <th className="text-left py-3">Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req.id} className="border-b border-slate-800">

                <td className="py-3">{req.name}</td>
                <td>{req.phone}</td>
                <td>{req.service}</td>
                <td>₦{req.amount.toLocaleString()}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      req.status === "completed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>

                <td>{req.date}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </motion.div>

    </div>
  );
}

export default Requests;