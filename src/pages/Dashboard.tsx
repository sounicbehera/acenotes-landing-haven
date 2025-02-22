
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DashboardStats } from "@/components/DashboardStats";
import { DashboardTable } from "@/components/DashboardTable";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                👋 Welcome back, User
              </h1>
              <p className="text-sm text-gray-500">
                Here's what's happening with your notes today.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="pl-10 w-[300px]"
              />
            </div>
          </div>

          <DashboardStats />
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <DashboardTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
