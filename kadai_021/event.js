const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=>{
    setTimeout(() => {
        const text2 = document.createElement('h2');
        text2.textContent = 'ボタンをクリックしました';
        text.replaceWith(text2);
    }, 2000);
})