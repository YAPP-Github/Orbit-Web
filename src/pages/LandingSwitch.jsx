import { useState, useEffect } from 'react';
import DesktopHome from './desktop/DesktopHome';
import MobileHome from './mobile/MobileHome';

// 뷰포트 너비가 768px 미만이면 모바일로 간주 (원하는 값으로 조정 가능)
function checkIfMobile() {
  return window.innerWidth < 1100;
}

export default function LandingSwitch() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기에 한 번 체크
    setIsMobile(checkIfMobile());

    // 리사이즈 때마다 체크
    function handleResize() {
      setIsMobile(checkIfMobile());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}
