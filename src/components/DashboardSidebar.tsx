
import { Link } from "react-router-dom";
import { LayoutDashboard, Book, Bookmark, Users, Lock, Archive } from "lucide-react";

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-100 bg-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src="/lovable-uploads/9989fc7d-0088-4677-a9be-c7ebff2f6415.png" alt="Logo" className="h-8 w-8" />
        <span className="font-display font-bold text-xl">Dashboard</span>
        <span className="text-xs text-gray-400">v1.01</span>
      </div>

      <nav className="space-y-1">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 rounded-lg bg-gray-50"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          to="/library"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
        >
          <Book className="h-4 w-4" />
          Library
        </Link>
        <Link
          to="/bookmarks"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
        >
          <Bookmark className="h-4 w-4" />
          Bookmarks
        </Link>
        <Link
          to="/shared"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
        >
          <Users className="h-4 w-4" />
          Shared
        </Link>
        <Link
          to="/private"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
        >
          <Lock className="h-4 w-4" />
          Private
        </Link>
        <Link
          to="/openchive"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
        >
          <Archive className="h-4 w-4" />
          Openchive
        </Link>
      </nav>
    </aside>
  );
};
