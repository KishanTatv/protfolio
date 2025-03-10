import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-10 lg:px-8">
        {/* Center the links in mobile view */}
        <nav
          className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {/* LinkedIn Link */}
          <div className="pb-4 sm:pb-6">
            <Link
              href="https://www.linkedin.com/in/bhadani-kishan-8a423a20a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 text-muted-foreground hover:text-foreground flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.4c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.4h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.7h-3v-11h3v1.5c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.7 1.4 3.7 4.3v6.7z" />
              </svg>
              <span>LinkedIn</span>
            </Link>
          </div>

          {/* GitHub Link */}
          <div className="pb-4 sm:pb-6">
            <Link
              href="https://github.com/KishanTatv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 text-muted-foreground hover:text-foreground flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.7 1.5-.7.9-1.5 2.4-1.1 3-.9.1-.7.3-1.2.5-1.5-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.5 3-.5s2 .2 3 .5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.1 1.9 1.1 3.2 0 4.5-2.8 5.5-5.5 5.8.4.3.6.9.6 1.8v2.6c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </Link>
          </div>
        </nav>

        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Kishan Bhadani</span>. Let’s create
          something amazing together! 🚀
        </p>
      </div>
    </footer>
  );
}
