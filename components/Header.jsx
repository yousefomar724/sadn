import Link from 'next/link'
import { navLinks } from '../data'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <div className='bg-[#f8f9fa] p-4 font-almarai' dir='rtl'>
      <div className='max-w-6xl mx-auto flex items-center sm:justify-between justify-center gap-4 flex-wrap'>
        <h3 className='text-2xl md:text-3xl font-bold font-light'>
          سادن <span className='text-primary-900'>الحرم</span>
        </h3>
        <nav className='flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className={`flex items-center justify-center flex-col gap-0.5 group ${
                link.route === pathname ? 'text-primary-900' : 'text-gray-600'
              }`}
            >
              <link.icon className='text-lg md:text-xl group-hover:text-primary-900 transition' />
              <span className='group-hover:text-primary-900 transition font-medium text-sm md:text-base'>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
