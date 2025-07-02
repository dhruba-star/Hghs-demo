export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center">
      <p className="mb-2">Habiganj Govt. High School</p>
      <p>Email: example@school.edu | Phone: 01234-567890</p>
      <p className="text-sm mt-2">© {new Date().getFullYear()} HGHS. All rights reserved.</p>
    </footer>
  );
}
