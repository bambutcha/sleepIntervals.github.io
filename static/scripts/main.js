const startTimeInput = document.getElementById('start-time');
const endTimeInput = document.getElementById('end-time');
const output = document.getElementById('output');

function calculateSleepCycles() {
    const startTime = new Date(startTimeInput.value);
    const endTime = new Date(endTimeInput.value);

    if (endTime > startTime) {
        const diffInMinutes = (endTime - startTime) / 60000; // Разница в минутах
        const fullCycles = Math.floor(diffInMinutes / 90); // Полные циклы сна
        const remainingMinutes = diffInMinutes % 90; // Оставшиеся минуты до следующего цикла
        const nextCycleTime = remainingMinutes > 0 ? 90 - remainingMinutes : 0; // Время до следующего полного цикла
        
        if (nextCycleTime == 0) {
            output.innerHTML = `
            Время сна: ${diffInMinutes} минут <br>
            Полные циклы: ${fullCycles} <br>`;
        } else {
            output.innerHTML = `
            Время сна: ${diffInMinutes} минут <br>
            Полные циклы: ${fullCycles} <br>
            Не хватает до следующего цикла: ${nextCycleTime} минут`;
        }
    } else {
        output.innerHTML = 'Пожалуйста, введите корректные даты и время.';
    }
}

startTimeInput.addEventListener('change', calculateSleepCycles);
endTimeInput.addEventListener('change', calculateSleepCycles);