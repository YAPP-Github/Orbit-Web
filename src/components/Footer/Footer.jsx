// src/components/Footer/Footer.jsx
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#233D61] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Orbit 로고 */}
        <div className="flex mb-6">
          <h2 className="text-2xl font-bold">Orbit</h2>
        </div>
        
        {/* Legal 섹션과 Instagram 링크 */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          {/* Legal 섹션 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li className="mb-1 md:mb-0">
                <a href="/privacy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* 소셜 미디어 아이콘 및 텍스트 */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://www.instagram.com/orbit_alarm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-gray-400 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a 
              href="https://github.com/YAPP-Github/Orbit-BE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-gray-400 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
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
