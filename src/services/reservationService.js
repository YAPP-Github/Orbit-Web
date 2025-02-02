export async function submitReservation(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get('email');
  const phone = formData.get('phone');

  try {
    const response = await fetch('http://dev.orbitalarm.net/api/v1/prereservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ email, phone }),
    });

    // 응답이 실패한 경우 상태 코드에 따라 처리
    if (!response.ok) {
      if (response.status === 409) {
        alert('이미 등록된 사전 예약 정보입니다.');
        return;
      } else if (response.status === 400) {
        alert('전화번호 또는 이메일 형식이 올바르지 않습니다.');
        return;
      } else {
        throw new Error('사전 예약 API 요청 실패');
      }
    }

    alert('사전 예약이 완료되었습니다!');
  } catch (error) {
    console.error(error);
    alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
}
