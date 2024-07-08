// script.js

// 운세 랜덤 뽑기 함수
function getRandomFortune() {
    const fortunes = [
        "오늘은 행운이 가득할 거예요!",
        "지금 당신에게 매우 중요한 선택이 있어요.",
        "조심해야 할 일이 있을 수 있어요.",
        "오늘 하루도 화이팅하세요!",
        "즐거운 일이 기다리고 있어요.",
        "어제보다 더 나은 하루가 될 거예요.",
        "어떤 문제도 해결할 수 있을 거예요.",
        "새로운 만남이 기다리고 있어요.",
        "오늘은 즐거운 소식이 들리겠네요.",
        "당신의 노력이 결실을 맺을 거예요.",
        "조금 힘들 수 있지만 극복할 수 있을 거예요.",
        "일이 잘 풀리지 않을 수도 있어요.",
        "주의가 필요한 일이 있을 수 있어요."
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// 버튼 클릭 시 SweetAlert2를 사용하여 운세 보여주기
document.getElementById('fortune-button').addEventListener('click', function() {
    const fortuneText = getRandomFortune();

    Swal.fire({
        title: '운세',
        text: fortuneText,
        icon: 'success',
        confirmButtonText: '확인',
        customClass: {
            popup: 'text-center'
        }
    });
});

