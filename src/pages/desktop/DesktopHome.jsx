import { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '@components/Footer/Footer';
import { submitReservation } from '@services/reservationService';


export default function Home() {
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
            [섹션 1] 배경 이미지 (desktop_bg1.svg), 높이 1445px
         ---------------------------------------------------------------- */}
        <section
          className="relative flex flex-col items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('/assets/images/desktop_bg1.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '1445px',
          }}
        >
          <motion.div
            className="relative flex flex-col items-center mt-[170px] z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/images/logo.svg"
              alt="Orbit Logo"
              className="mb-8 w-auto h-16"
            />

            <div className="w-[700px] text-center mb-[18px]">
              <p className="font-pretendard font-bold text-[60px] leading-[90px] whitespace-nowrap">
                운세로 맞이하는 즐거운 아침 <br />
                오르비 알람
              </p>
            </div>

            <button
              onClick={scrollToReservationForm}
              className="mt-4 w-[320px] h-[70px] bg-[#FDFE96] text-black rounded-2xl text-xl hover:bg-[#0F223F] hover:text-[#FDFE96] font-medium transition-colors"
            >
              사전 예약 하러가기
            </button>
          </motion.div>

          {/* 섹션 1 하단 이미지 */}
          <motion.div
            className="absolute bottom-0 flex justify-center w-full mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/images/desktop_image1.png"
              alt="Desktop Image 1"
              style={{ width: '847.9px', height: '873.14px' }}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 2] 배경 색상 #1F2127, 높이 720px
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-center relative"
          style={{ backgroundColor: '#1F2127', height: '720px' }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white text-opacity-70 text-[24px] leading-[36px] font-medium mb-4 whitespace-nowrap">
              아침에 가장 먼저 듣게되는 기상알람
            </p>

            <p className="text-white text-[40px] leading-[60px] font-bold mb-6 whitespace-nowrap">
              기분 좋은 아침을 맞이하고 계신가요?
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src="/assets/images/desktop_image2.png"
              alt="Orbit Image"
              className="w-[730px] h-[340px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 3] 배경 색상 상속, 높이 770px
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-center"
          style={{ height: '770px' }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white text-[40px] leading-[60px] font-bold mb-6 whitespace-nowrap">
              매번 반복되고 지겨운 알람, <br />
              기상에 대한 ‘동기부여’가 필요합니다
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
              src="/assets/images/desktop_image3.png"
              alt="Motivation Image"
              className="w-[1000px] h-[300px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 4] 배경 이미지 (desktop_bg2.svg), 높이 960px
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col md:flex-row items-center justify-center gap-8 px-16 py-12 overflow-hidden"
          style={{
            backgroundImage: `url('/assets/images/desktop_bg2.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '960px',
          }}
        >
          <motion.div
            className="flex flex-col items-start md:w-1/2 max-w-xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/images/logo.svg"
              alt="Orbit Logo"
              className="mb-6 w-auto h-16"
            />

            <p className="text-white text-[40px] leading-[60px] font-bold mb-6 text-left whitespace-nowrap">
              기상 알람과 함께<br />
              제공되는 하루 운세로<br />
              기분 좋은 아침을 맞이하세요!
            </p>

            <button
              onClick={scrollToReservationForm}
              className="mt-4 w-[320px] h-[70px] bg-[#FDFE96] text-black rounded-2xl text-xl hover:bg-[#0F223F] hover:text-[#FDFE96] font-medium transition-colors"
            >
              사전 예약 하러가기
            </button>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/assets/images/desktop_image4.png"
              alt="Section 4 Image"
              className="w-[600px] h-[464px] object-contain"
            />
          </motion.div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 5] 배경 색상 상속, 높이 1800px
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col px-16 py-12"
          style={{ height: '1800px' }}
        >
          {/* 상단 절반: 왼쪽 텍스트, 오른쪽 이미지 */}
          <div className="flex flex-col md:flex-row w-full h-1/2 items-center justify-center gap-8">
            {/* 왼쪽 텍스트 (40%) → 중앙 기준에 맞춰 오른쪽 정렬 */}
            <motion.div
              className="md:w-2/5 flex justify-end items-center h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-[600px] text-left">
                <p className="font-medium text-[24px] leading-[36px] text-[#FEFF65] mb-4 whitespace-nowrap">
                  운세 기상 알람
                </p>
                <p className="font-bold text-[36px] leading-[54px] text-white mb-4 whitespace-nowrap">
                  기상 시간에 하루 운세를<br />
                  받을 수 있도록 알람을 설정해요
                </p>
                <p className="font-regular text-[20px] leading-[30px] text-white/70 whitespace-nowrap">
                  설정한 시간에 맞춰 미션과 운세를 보내드릴게요<br />
                  첫 알람에서 미션을 성공하면 보상을 받을 수 있어요
                </p>
              </div>
            </motion.div>

            {/* 오른쪽 이미지 (60%) */}
            <motion.div
              className="md:w-3/5 flex justify-center items-center h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/assets/images/desktop_image5.png"
                alt="Section 5 Top Image"
                className="w-[600px] h-[600px] object-contain"
              />
            </motion.div>
          </div>

          {/* 하단 절반: 왼쪽 이미지, 오른쪽 텍스트 */}
          <div className="flex flex-col md:flex-row w-full h-1/2 items-center justify-center gap-8 mt-8 md:mt-0">
            {/* 왼쪽 이미지 (60%) */}
            <motion.div
              className="md:w-3/5 flex justify-center items-center h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/assets/images/desktop_image6.png"
                alt="Section 5 Bottom Image"
                className="w-[600px] h-[600px] object-contain"
              />
            </motion.div>

            {/* 오른쪽 텍스트 (40%) → 중앙 기준에 맞춰 왼쪽 정렬 */}
            <motion.div
              className="md:w-2/5 flex justify-start items-center h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-[600px] text-right">
                <p className="font-medium text-[24px] leading-[36px] text-[#FEFF65] mb-4 whitespace-nowrap">
                  기상 미션
                </p>
                <p className="font-bold text-[36px] leading-[54px] text-white mb-4 whitespace-nowrap">
                  기상 미션에 성공하면<br />
                  오늘의 운세를 확인할 수 있어요
                </p>
                <p className="font-regular text-[20px] leading-[30px] text-white/70 whitespace-nowrap">
                  기상 미션을 수행하며 상쾌하게 잠을 깨보세요<br />
                  자연스럽게 잠에서 깨어날 수 있게 도와드릴게요
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            [섹션 6] 배경 색상 #233D61, 스크롤/폼
         ---------------------------------------------------------------- */}
        <section
          className="flex flex-col items-center justify-center px-16 py-12 text-center"
          style={{ backgroundColor: '#233D61' }}
        >
          {/* 1) "오늘의 운세" 텍스트 */}
          <motion.div
            className="max-w-2xl mx-auto pt-[150px] mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-medium text-[24px] leading-[36px] text-[#FEFF65] mb-4 whitespace-nowrap">
              오늘의 운세
            </p>
            <p className="font-bold text-[36px] leading-[54px] text-white mb-6 whitespace-nowrap">
              오늘 하루를 어떤 마음가짐으로<br />
              시작할지 결정해 보세요!
            </p>
            <p className="font-regular text-[20px] leading-[30px] text-white/70 whitespace-nowrap">
              오늘 하루를 위한 추천 행동, 주의할 점, 그리고 행운의 코디까지! <br />
              아침을 더욱 의미 있게 만들어 줄 운세 정보를 확인하며 기상에 대한 동기를 얻어보세요.
            </p>
          </motion.div>

          {/* 2) 이미지 */}
          <motion.div
            className="mx-auto mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/images/desktop_image7.png"
              alt="Orbit Image"
              className="w-[1200px] max-w-full h-auto object-contain"
            />
          </motion.div>

          {/* 3) "출시 예정" 파트 */}
          <motion.div
            className="max-w-2xl mx-auto flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/assets/images/icon_clock.png"
              alt="Orbit Clock Icon"
              className="mb-6 w-auto h-16"
            />
            <p className="font-regular text-[20px] leading-[30px] text-white/70 mb-4 whitespace-nowrap">
              2025년 2월, 정식 버전 출시 예정
            </p>
            <p className="font-bold text-[36px] leading-[54px] text-white whitespace-nowrap">
              스토어에 출시되면 알람을 보내드릴게요<br />
              <span className="text-[#FEFF65]">사전 예약</span>하고 즐거운 기상을 시작해보세요!!
            </p>
          </motion.div>

          {/* 4) 폼 섹션 → ref로 연결됨 */}
          <motion.form
            ref={reservationFormRef}
            onSubmit={submitReservation}
            className="w-full max-w-md flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* 이메일 입력 */}
            <div className="flex flex-col items-start w-full">
              <label htmlFor="email" className="text-white font-medium mb-2 whitespace-nowrap">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="noreply@orbitalarm.net"
                className="w-full px-4 py-2 rounded-md bg-[#2A2C33] text-white focus:outline-none focus:ring-2 focus:ring-[#FEFF65]"
              />
            </div>

            {/* 연락처 입력 */}
            <div className="flex flex-col items-start w-full">
              <label htmlFor="phone" className="text-white font-medium mb-2 whitespace-nowrap">
                연락처
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-1234-5678"
                className="w-full px-4 py-2 rounded-md bg-[#2A2C33] text-white focus:outline-none focus:ring-2 focus:ring-[#FEFF65]"
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="mt-2 w-full py-3 bg-[#FEFF65] text-black font-semibold rounded-md hover:bg-[#0F223F] hover:text-[#FDFE96] transition-colors whitespace-nowrap"
            >
              사전 예약하기
            </button>
          </motion.form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
