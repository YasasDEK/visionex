import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Board from '@/components/Board';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Header />
      <Sidebar />
      <div className="flex-1 flex flex-col ml-0 md:ml-[220px]">
        <main className="flex-1 mt-[72px] overflow-hidden">
          <Board />
        </main>
      </div>
    </div>
  );
}
