export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">HGHS</div>
      <nav className="space-x-6">
        <a href="#" className="hover:underline">Find Your School</a>
        <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded">Enroll Now</a>
      </nav>
    </header>
  );
}
