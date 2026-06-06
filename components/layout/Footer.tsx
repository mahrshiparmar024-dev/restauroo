'use client';

import Link from 'next/link';

const FOOTER_NAV = [
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
  { href: '/order', label: 'Order' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'FB' },
  { href: 'https://google.com/maps', label: 'Google Maps', icon: 'GM' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        className="site-container"
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-8)',
        }}
      >
        {/* Top Section — 3 column on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-12)',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: 'var(--space-4)',
              }}
            >
              Anatolian
              <span style={{ color: 'var(--color-gold)' }}>.</span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                maxWidth: '320px',
              }}
            >
              Authentic Anatolian cuisine brought to Kitchener by a family with
              three generations of recipes from Gaziantep.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-gold)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-6)',
              }}
            >
              Navigate
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      transition: `color var(--dur-fast) var(--ease-out)`,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-gold)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-6)',
              }}
            >
              Visit Us
            </h3>
            <address
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                fontStyle: 'normal',
                lineHeight: 1.8,
              }}
            >
              137 King Street West
              <br />
              Kitchener, ON N2G 1A7
              <br />
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-faint)',
                  letterSpacing: '0.08em',
                }}
              >
                TUE — THU
              </span>{' '}
              <span style={{ color: 'var(--color-text)' }}>
                11:30am — 9:30pm
              </span>
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-faint)',
                  letterSpacing: '0.08em',
                }}
              >
                FRI — SAT
              </span>{' '}
              <span style={{ color: 'var(--color-text)' }}>
                11:30am — 10:30pm
              </span>
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-faint)',
                  letterSpacing: '0.08em',
                }}
              >
                SUN
              </span>{' '}
              <span style={{ color: 'var(--color-text)' }}>
                12:00pm — 8:00pm
              </span>
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-faint)',
                  letterSpacing: '0.08em',
                }}
              >
                MON
              </span>{' '}
              <span style={{ color: 'var(--color-text-muted)' }}>Closed</span>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'var(--space-16)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--color-border)',
          }}
          className="footer-bottom"
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-faint)',
              letterSpacing: '0.08em',
            }}
          >
            © 2025 Anatolian Kitchen. Kitchener, Ontario.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
            }}
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.08em',
                  padding: 'var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  transition: `color var(--dur-fast) var(--ease-out)`,
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer responsive styles */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
