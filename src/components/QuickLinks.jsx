const links = [
  { label: "Enrollment", icon: "📋" },
  { label: "Calendar", icon: "🗓️" },
  { label: "Resources", icon: "🔗" },
  { label: "Schools", icon: "🏫" },
  { label: "Board", icon: "👥" },
  { label: "Announcements", icon: "📧" },
];

export default function QuickLinks() {
  return (
    <section className="grid grid-cols-3 gap-4 p-10 bg-white">
      {links.map((link) => (
        <div
          key={link.label}
          className="flex flex-col items-center justify-center p-6 rounded bg-gray-100 shadow hover:shadow-md transition"
        >
          <div className="text-4xl mb-2">{link.icon}</div>
          <div className="text-lg font-medium">{link.label}</div>
        </div>
      ))}
    </section>
  );
}
