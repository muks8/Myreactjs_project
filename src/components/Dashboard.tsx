import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Server,
  Database,
  Settings,
  LogOut,
  Box,
  Activity,
  CheckCircle,
  Cpu
} from 'lucide-react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const stats = [
    {
      title: 'Total Pods',
      value: '24',
      icon: Box,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Running Containers',
      value: '18',
      icon: Activity,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Cluster Status',
      value: 'Healthy',
      icon: CheckCircle,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'CPU Usage',
      value: '42%',
      icon: Cpu,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Server, label: 'Servers', active: false },
    { icon: Database, label: 'Databases', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <div className="flex items-center ml-4 lg:ml-0">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">Admin Panel</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <span className="text-sm text-gray-600">Welcome,</span>
                <span className="ml-1 text-sm font-semibold text-gray-900">Admin</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out mt-16 lg:mt-0`}>
          <div className="h-full px-3 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center p-3 rounded-lg transition duration-200 ${
                      item.active
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-700' : 'text-gray-500'}`} />
                    <span className="ml-3 font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome Admin</h1>
              <p className="mt-2 text-gray-600">Here's what's happening with your infrastructure today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                      <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { action: 'Pod deployment successful', time: '2 minutes ago', status: 'success' },
                    { action: 'Container restart initiated', time: '15 minutes ago', status: 'warning' },
                    { action: 'Database backup completed', time: '1 hour ago', status: 'success' },
                    { action: 'System health check passed', time: '2 hours ago', status: 'success' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-500' : 'bg-orange-500'
                        } mr-3`}></div>
                        <span className="text-sm text-gray-700">{activity.action}</span>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">System Resources</h2>
                <div className="space-y-4">
                  {[
                    { label: 'CPU Usage', value: 42, color: 'bg-blue-500' },
                    { label: 'Memory Usage', value: 68, color: 'bg-green-500' },
                    { label: 'Disk Usage', value: 35, color: 'bg-orange-500' },
                    { label: 'Network I/O', value: 52, color: 'bg-purple-500' }
                  ].map((resource, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{resource.label}</span>
                        <span className="text-sm font-semibold text-gray-900">{resource.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${resource.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${resource.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
