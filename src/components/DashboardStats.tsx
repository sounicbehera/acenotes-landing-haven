
import { Button } from "@/components/ui/button";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-sm font-medium text-gray-600">Today's Uploads</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">24</span>
          <span className="text-sm text-green-600">+12%</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 p-6 rounded-lg border border-purple-500/10 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-sm font-medium text-gray-600">Recent Downloads</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-purple-600">156</span>
          <span className="text-sm text-green-600">+8%</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-6 rounded-lg border border-blue-500/10 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-sm font-medium text-gray-600">Active Users</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">892</span>
          <span className="text-sm text-green-600">+15%</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 p-6 rounded-lg border border-rose-500/10 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-sm font-medium text-gray-600">Total Notes</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-rose-600">1,893</span>
          <span className="text-sm text-rose-600">+1%</span>
        </div>
      </div>
    </div>
  );
};
