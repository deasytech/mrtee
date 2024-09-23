import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-10 flex flex-col max-sm:px-5 mt-16">
      <div className="flex flex-col md:flex-row gap-6 w-full py-8">
        <div className='flex flex-wrap gap-6 items-start w-full md:w-1/4'>
          <div className='flex flex-col'>
            <Link href="/" className='mb-2'>
              <Image src="/images/logo.png" alt="logo" width={150} height={59} />
            </Link>
            <p className="text-gray-400 text-small-medium">Welcome to Mr Tee, your ultimate destination for luxury men's fashion. We believe that style is a reflection of individuality, and our curated selection of high-end fashion pieces is designed to help you make a statement.</p>
          </div>
          <div className="space-y-3">
            <p className="text-small-medium">Got Question? Call us 24/7</p>
            <p className="text-base-bold text-gold">+234 703 292 0367</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-between items-start w-full md:w-3/4'>
          <div>
            <h3 className="uppercase text-white mb-3">Useful Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="#" className="hover:text-gold">About Mr Tee Fashion Store</Link></li>
              <li><Link href="#" className="hover:text-gold">How to shop on Mr Tee</Link></li>
              <li><Link href="#" className="hover:text-gold">FAQ</Link></li>
              <li><Link href="#" className="hover:text-gold">Contact us</Link></li>
              <li><Link href="/login" className="hover:text-gold">Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-white mb-3">Customer Service</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="#" className="hover:text-gold">Payment Methods</Link></li>
              <li><Link href="#" className="hover:text-gold">Money-back guarantee!</Link></li>
              <li><Link href="#" className="hover:text-gold">Returns</Link></li>
              <li><Link href="#" className="hover:text-gold">Shipping</Link></li>
              <li><Link href="#" className="hover:text-gold">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-gold">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-white mb-3">My Account</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="#" className="hover:text-gold">Register</Link></li>
              <li><Link href="#" className="hover:text-gold">View Cart</Link></li>
              <li><Link href="#" className="hover:text-gold">My Wishlist</Link></li>
              <li><Link href="#" className="hover:text-gold">Track My Order</Link></li>
              <li><Link href="#" className="hover:text-gold">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-white mb-3">Sign up to newsletter</h3>
            <p className="text-gray-400 text-small-medium mb-2">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan</p>
            <Input className="bg-white text-gray-800 border-gray-700 rounded-none" placeholder="Enter your email address" />
            <div className="space-y-3 mt-6">
              <p className="text-small-medium">Got Question? Call us 24/7</p>
              <Image src="/images/payments.png" alt="payment" width={272} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-10 my-5 border-b border-dashed border-gray-500" />
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Mr Tee Luxury Store. All Rights Reserved.</p>
        <div className="flex items-center gap-3">
          <Link href="https://instagram.com/" target="_blank">
            <Image src="/icons/instagram.svg" alt="instagram" className="bg-red-500 p-1.5 rounded-full" width={32} height={32} />
          </Link>
          <Link href="https://facebook.com/" target="_blank">
            <Image src="/icons/facebook.svg" alt="facebook" className="bg-blue-900 p-1.5 rounded-full" width={32} height={32} />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <Image src="/icons/twitter.svg" alt="twitter" className="bg-blue-500 p-1.5 rounded-full" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer