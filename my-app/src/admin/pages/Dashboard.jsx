import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-700 p-6 rounded-xl border border-slate-800"
        >
          <h3 className="text-sm text-slate-400">Total Revenue</h3>
          <p className="text-2xl font-bold text-emerald-400 mt-2">
            ₦450,000
          </p>
        </motion.div>

        {/* Total Requests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-700 p-6 rounded-xl border border-slate-800"
        >
          <h3 className="text-sm text-slate-400">Total Requests</h3>
          <p className="text-2xl font-bold mt-2">
            120
          </p>
        </motion.div>

        {/* Completed Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-700 p-6 rounded-xl border border-slate-800"
        >
          <h3 className="text-sm text-slate-400">Completed Jobs</h3>
          <p className="text-2xl font-bold mt-2">
            85
          </p>
        </motion.div>

      </div>

      {/* ===== RECENT REQUESTS TABLE ===== */}
      <div className="bg-slate-700 p-6 rounded-xl border border-slate-800">

        <h2 className="text-lg font-semibold mb-4">
          Recent Requests
        </h2>

        <table className="w-full text-sm">
          <thead className="text-slate-400 border-b border-slate-800">
            <tr>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Service</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b border-slate-800">
              <td className="py-3">John Doe</td>
              <td>Cleaning</td>
              <td>₦25,000</td>
              <td className="text-yellow-400">Pending</td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="py-3">Mary Jane</td>
              <td>Food Supply</td>
              <td>₦40,000</td>
              <td className="text-emerald-400">Completed</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Dashboard;