export function Footer() {
  return (
    <footer className="bg-[#2B1D14] py-10 text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center text-xs sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p>&copy; {new Date().getFullYear()} Commoner Salon. Little Five Points, Atlanta.</p>
        <div className="flex gap-5">
          <a
            href="http://instagram.com/commonersalon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="http://www.facebook.com/commonersalon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
