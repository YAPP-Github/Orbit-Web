// src/components/Footer/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#233D61] text-white py-8">
      <div className="container mx-auto px-4">
        {/* 상단 섹션: 로고 및 설명 */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Orbit-Web</h2>
          </div>
          
          {/* 소셜 미디어 아이콘 */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/orbit_alarm" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 중간 섹션: 네비게이션 링크 */}
        <div className="flex flex-col md:flex-row md:justify-between mb-6">

          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li className="mb-1">
                <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 섹션: 저작권 */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Orbit-Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
