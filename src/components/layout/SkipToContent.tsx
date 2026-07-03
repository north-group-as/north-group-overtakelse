export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-dark focus:shadow-lg focus:outline focus:outline-2 focus:outline-green"
    >
      Hopp til hovedinnhold
    </a>
  );
}
