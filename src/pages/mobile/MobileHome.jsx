// src/pages/MobileHome.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '@components/Footer/Footer';
import { submitReservation } from '@services/reservationService';

export default function MobileHome() {
  const reservationFormRef = useRef(null);

  const scrollToReservationForm = () => {
    if (reservationFormRef.current) {
      reservationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#171920] text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* ----------------------------------------------------------------
            [섹션 1] 높이 760px – 배경 및 버튼 스타일은 그대로, 텍스트 크기를 조정
         ---------------------------------------------------------------- */}
        <section
          className="relative flex flex-col items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('/assets/images/desktop_bg1.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '760px',
          }}
        >
          <motion.div
            className="relative flex flex-col items-center mt-[80px] z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 로고 – 크기는 그대로 */}
            <img
              src="/assets/images/logo.svg"
              alt="Orbit Logo"
              className="mb-6 w-auto h-12"
            />

            {/* 텍스트 – 기존의 줄바꿈을 허용하여 전체 문구가 보이도록 수정 */}
            <div className="w-[400px] text-center mb-4">
              <p className="font-pretendard font-bold text-[22px] leading-[30px]">
                운세로 맞이하는 즐거운 아침, <br />
                오르비 알람
              </p>
            </div>

            <div className="flex gap-[10px] mt-4">
              <a
                  href="https://apps.apple.com/kr/app/orbit-%EC%98%A4%EB%A5%B4%EB%B9%84-%EC%95%8C%EB%9E%8C-%EA%B8%B0%EC%83%81%EC%95%8C%EB%9E%8C-%EC%9A%B4%EC%84%B8/id6741705831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
              >
                <img
                    src="/assets/images/app_store_image.png"
                    alt="Download on the App Store"
                    className="object-contain h-[25px]"
                />
              </a>
              <a
                  href="https://play.google.com/store/apps/details?id=com.yapp.orbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
              >
                <img
                    src="/assets/images/google_play_image.png"
                    alt="Get it on Google Play"
                    className="object-contain h-[30px]"
                />
              </a>
            </div>
          </motion.div>

          {/* 섹션 1 하단 이미지 */}
          <motion.div
            className="absolute bottom-0 flex justify-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/images/mobile_image1.png"
              alt="Mobile Section 1 Image"
              style={{ width: '283px', height: '426.44px' }}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 2] 높이 530px – 텍스트 크기 조정 (font-medium: 16px, font-bold: 22px)
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-center relative"
          style={{ backgroundColor: '#1F2127', height: '530px' }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-pretendard font-medium text-white text-opacity-70 text-[16px] leading-[24px] mb-4">
              아침에 가장 먼저 듣게되는 기상알람
            </p>
            <p className="font-pretendard font-bold text-white text-[22px] leading-[30px] mb-6">
              기분 좋은 아침을 <br />
              맞이하고 계신가요?
            </p>
          </motion.div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src="/assets/images/mobile_image2.png"
              alt="Orbit Image"
              className="w-[300px] h-[180px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 3] 높이 520px – 텍스트 크기 조정 (font-medium: 16px, font-bold: 22px)
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-center"
          style={{ height: '520px' }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-pretendard font-medium text-white text-opacity-70 text-[16px] leading-[24px] mb-4">
              아침에 가장 먼저 듣게되는 기상알람
            </p>
            <p className="font-pretendard font-bold text-white text-[22px] leading-[30px] mb-6">
              기상에 대한 <br />
              ‘동기부여’가 필요해요
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/assets/images/mobile_image3.png"
              alt="Motivation Image"
              className="w-[400px] h-[240px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 4] 높이 780px – 배경 이미지 및 텍스트 크기 조정 (font-bold: 22px)
         ---------------------------------------------------------------- */}
        <section
          className="relative flex flex-col items-center justify-start"
          style={{
            backgroundImage: `url('/assets/images/mobile_bg2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '780px',
          }}
        >
          <motion.div
            className="relative flex flex-col items-center mt-[80px] z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 로고 */}
            <img
              src="/assets/images/logo.svg"
              alt="Orbit Logo"
              className="mb-6 w-auto h-12"
            />

            {/* 텍스트 – font-bold를 22px로 조정 */}
            <div className="w-[300px] text-center mb-4">
              <p className="font-pretendard font-bold text-[22px] leading-[30px]">
                기상 알람과 함께 <br />
                제공되는 하루 운세로 <br />
                기분 좋은 아침을 맞이하세요!
              </p>
            </div>

            <div className="flex gap-[10px] mt-4">
              <a
                  href="https://apps.apple.com/kr/app/orbit-%EC%98%A4%EB%A5%B4%EB%B9%84-%EC%95%8C%EB%9E%8C-%EA%B8%B0%EC%83%81%EC%95%8C%EB%9E%8C-%EC%9A%B4%EC%84%B8/id6741705831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
              >
                <img
                    src="/assets/images/app_store_image.png"
                    alt="Download on the App Store"
                    className="object-contain h-[25px]"
                />
              </a>
              <a
                  href="https://play.google.com/store/apps/details?id=com.yapp.orbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
              >
                <img
                    src="/assets/images/google_play_image.png"
                    alt="Get it on Google Play"
                    className="object-contain h-[30px]"
                />
              </a>
            </div>
          </motion.div>

          {/* 섹션 4 하단 이미지 – 그대로 사용 */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/assets/images/desktop_image4.png"
              alt="Motivation Image"
              className="w-[600px] h-[240px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 5] 높이 2110px – 모바일 전용 재구성
            상단 반: 텍스트 블록 → 이미지 블록 (세로 배치)
            하단 반: 텍스트 블록 → 이미지 블록 (세로 배치)
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-between px-4 py-8"
          style={{ height: '2110px' }}
        >
          {/* 상단 반 */}
          <div className="flex flex-col items-center justify-center w-full" style={{ height: '1055px' }}>
            {/* 텍스트 블록 – font-medium: 16px, font-bold: 22px, font-regular: 14px */}
            <div className="w-full max-w-md text-center mb-6">
              <p className="font-pretendard font-medium text-[16px] leading-[24px] text-[#FEFF65] mb-4">
                운세 기상 알람
              </p>
              <p className="font-pretendard font-bold text-white text-[22px] leading-[30px] mb-4">
                기상 시간에 하루 운세를<br />받을 수 있도록 알람을 설정해요
              </p>
              <p className="font-pretendard font-regular text-white/70 text-[14px] leading-[20px]">
                설정한 시간에 맞춰 미션과 운세를 보내드릴게요<br />
                첫 알람에서 미션을 성공하면 보상을 받을 수 있어요
              </p>
            </div>
            {/* 이미지 블록 – 부모의 수평 패딩 무시 */}
            <img
              src="/assets/images/mobile_image4.png"
              alt="Mobile Section 5 Top Image"
              className="w-[400px] object-contain"
            />
          </div>

          {/* 하단 반 */}
          <div className="flex flex-col items-center justify-center w-full mt-8" style={{ height: '1055px' }}>
            {/* 텍스트 블록 */}
            <div className="w-full max-w-md text-center mb-6">
              <p className="font-pretendard font-medium text-[16px] leading-[24px] text-[#FEFF65] mb-4">
                기상 미션
              </p>
              <p className="font-pretendard font-bold text-white text-[22px] leading-[30px] mb-4">
                기상 미션에 성공하면<br />오늘의 운세를 확인할 수 있어요
              </p>
              <p className="font-pretendard font-regular text-white/70 text-[14px] leading-[20px]">
                기상 미션을 수행하며 상쾌하게 잠을 깨보세요<br />
                자연스럽게 잠에서 깨어날 수 있게 도와드릴게요
              </p>
            </div>
            {/* 이미지 블록 – 좌우 여백 제거 */}
            <img
              src="/assets/images/mobile_image5.png"
              alt="Mobile Section 5 Bottom Image"
              className="w-[400px] object-contain"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 6] 높이 1790px – 모바일 전용, 이미지 좌우 패딩 제거 및 텍스트 줄바꿈 허용
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-evenly px-4 py-8 text-center"
          style={{ backgroundColor: '#233D61', height: '1790px' }}
        >
          {/* 오늘의 운세 텍스트 */}
          <motion.div
            className="max-w-md mx-auto pt-[100px] mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-pretendard font-medium text-[16px] leading-[24px] text-[#FEFF65] mb-4">
              오늘의 운세
            </p>
            <p className="font-pretendard font-bold text-white text-[22px] leading-[30px] mb-4">
              오늘 하루를 어떤 마음가짐으로<br />
              시작할지 결정해 보세요!
            </p>
            <p className="font-pretendard font-regular text-white/70 text-[14px] leading-[20px]">
              오늘 하루를 위한 추천 행동, 주의할 점, 그리고 행운의 코디까지!<br />
              아침을 더욱 의미 있게 만들어 줄 운세 정보를 확인하며<br />
              기상에 대한 동기를 얻어보세요.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/images/mobile_image6.png"
              alt="Orbit Image"
              className="w-[700px] max-w-full h-auto object-contain"
            />
          </motion.div>

          {/* 출시 예정 파트 */}
          <motion.div
            className="max-w-md mx-auto flex flex-col items-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/assets/images/icon_clock.png"
              alt="Orbit Clock Icon"
              className="mb-4 w-auto h-12"
            />
            <p className="font-pretendard font-regular text-[14px] leading-[20px] text-white/70 mb-4">
              실제 사주 정보를 기반으로 운세를 보내드려요
            </p>
            <p className="font-pretendard font-bold text-[22px] leading-[30px] text-white">
              기상 알람과 함께 점쳐보는 나의 하루 운세,<br />
              지금 바로 시작해 보세요!
            </p>
          </motion.div>
          <div className="flex gap-[10px] mt-4">
            <a
                href="https://apps.apple.com/kr/app/orbit-%EC%98%A4%EB%A5%B4%EB%B9%84-%EC%95%8C%EB%9E%8C-%EA%B8%B0%EC%83%81%EC%95%8C%EB%9E%8C-%EC%9A%B4%EC%84%B8/id6741705831"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
            >
              <img
                  src="/assets/images/app_store_image.png"
                  alt="Download on the App Store"
                  className="object-contain h-[25px]"
              />
            </a>
            <a
                href="https://play.google.com/store/apps/details?id=com.yapp.orbit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] h-[40px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center"
            >
              <img
                  src="/assets/images/google_play_image.png"
                  alt="Get it on Google Play"
                  className="object-contain h-[30px]"
              />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
