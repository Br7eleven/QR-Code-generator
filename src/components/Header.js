export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">QR Generator</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
        </nav>
      </div>
    </header>
  );
}
