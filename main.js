// const btn1 = document.querySelector('.btnTask1');
// const inp1 = document.querySelector('.inputTask1');

// task2
const natureFoto = document.querySelector('.natureFoto');
natureFoto.src = 'https://images.unsplash.com/photo-1755380749576-c2372cc487a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8';

// task3

const link3 = document.querySelector('.link');
// natureFoto.setAttribute('alt');
natureFoto.alt = 'photo of nature';
console.log(natureFoto.alt);

link3.src = 'https://www.facebook.com/?locale=uk_UA';
// task4

const list = document.querySelector('.list');
const arrayLists = document.querySelectorAll('.list');
console.log(arrayLists);

list.firstChild.textContent = 'new content';

console.log(list.firstChild);
