export default function Hero() {
  return (
    <section
      className="h-[60vh] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
    >
      <h1 className="text-4xl font-semibold mb-2">inspire • connect • ignite</h1>
      <p className="max-w-xl text-lg">
        A welcoming community that inspires possibilities, connects people, and ignites learning!
      </p>
    </section>
  );
}
