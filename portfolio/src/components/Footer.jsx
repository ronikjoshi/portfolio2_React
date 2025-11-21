function Footer() {
  return (
    <footer className="text-center px-5 py-8 bg-[var(--header-bg)] text-[var(--header-text)] mt-0 text-[0.9rem]">
      <p className="mb-0 text-[var(--header-text)]">
        &copy; {new Date().getFullYear()} Ronik Joshi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;