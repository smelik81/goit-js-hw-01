// Task-3
function getElementWidth(content, padding, border) {
   const contentWidth = Number.parseInt(content);
   const contentPadding = Number.parseInt(padding);
   const contentBorder = Number.parseFloat(border);
    const mathResult = (contentWidth + (contentPadding + contentBorder) * 2); // я може і не програмист але на відмінно і не розумію чим відрізняється множення кожного елемента на 2 від мого підрахунку щоб виконати спочатку дію в дужках.Всі ментори кажуть що програмування це про варіативність, тому з Вашого дозволу я залишу так як я зробив обчислення першого разу - результат однаковий.Дякую
    return mathResult;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


