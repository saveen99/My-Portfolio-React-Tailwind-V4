/**
* @copyright 2025 Saveen Maduranga
*/

/**
 * Components
 */
import { ButtonPrimary } from "./Button";
import logo from '../assets/images/logo.png'

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About me',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#work'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/saveen99'
  },
  {
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/saveen-maduranga-939250181'
  },
  {
    label: 'Whatsapp',
    href: 'https://wa.me/94773730768'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/saveenmaduranga/'
  }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                        href="mailto:saveenonline@gmail.com"
                        label="Start Project"
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-3 mt-8 reveal-up">Site Map</p>

                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a 
                                        href={href}
                                        className="block text-sm text-zinc-400 py-2 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-3 mt-8 reveal-up">Social Media</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a 
                                        href={href}
                                        target='_blank'
                                        className="block text-sm text-zinc-400 py-2 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                    href="/" 
                    className="logo reveal-up"
                >
                    <img 
                        src={logo}
                        width={40}
                        height={40}
                        alt="Logo" 
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200">Saveen Maduranga</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer