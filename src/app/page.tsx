import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 mt-[72px] flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900">Board Content Coming Soon...</h1>
        </main>
      </div>
    </div>
  );
}
