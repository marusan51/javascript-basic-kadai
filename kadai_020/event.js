const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const text2 = document.createElement('h2');
    text2.textContent = 'ボタンをクリックしました';
    text.replaceWith(text2);
})