
import { Database, File } from "lucide-react";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Space left</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">516</span>
              <span className="text-sm text-gray-500">MB</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <span className="text-green-600">↑</span>
              50% left
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <File className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Files</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">1,893</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-rose-600">
              <span className="text-rose-600">↑</span>
              1% this month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
