import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Header />
      <Sidebar />
      <div className="flex-1 flex flex-col ml-0 md:ml-[220px]">
        <main className="flex-1 mt-[72px] flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900">Board Content Coming Soon...</h1>
        </main>
      </div>
    </div>
  );
}
