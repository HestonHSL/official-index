import { Link, Outlet } from 'umi';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}
