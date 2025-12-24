export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-xl font-semibold">Epic Software Labs</span>
            <span
              className="text-sm"
              style={{ color: 'var(--content-muted)' }}
            >
              © {currentYear} All rights reserved.
            </span>
          </div>

          <ul className="flex gap-6 list-none m-0 p-0">
            <li>
              <a
                href="https://www.bookedcalls.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline transition-colors hover:text-white"
                style={{ color: 'var(--content-muted)' }}
              >
                BookedCalls
              </a>
            </li>
            <li>
              <a
                href="https://titancard.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline transition-colors hover:text-white"
                style={{ color: 'var(--content-muted)' }}
              >
                TitanCard
              </a>
            </li>
            <li>
              <a
                href="https://tappshop.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline transition-colors hover:text-white"
                style={{ color: 'var(--content-muted)' }}
              >
                TappShop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
