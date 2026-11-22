const params = new URLSearchParams(window.location.search)
console.log(params)
const searchTerm = params.get('search')
console.log(searchTerm)
fetch('http://127.0.0.1:5000/search', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ search: searchTerm })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then(data => {
        console.log("data received:", data)
        const results = document.getElementById('results')
        data.docs.forEach(book => {

            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const title = document.createElement('h3');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = book.author_name?.join(', ') || 'Unknown Author';

            const year = document.createElement('p');
            year.textContent = book.first_publish_year || 'Unknown Year';

            const cover = document.createElement('img');

            if (book.cover_i) {
                cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                cover.alt = book.title;
            }
            else {
                cover.src = "images/no-cover.png";
                cover.alt = "Book cover unavailable";
            }

            const addButton = document.createElement('button');
            addButton.textContent = '＋ Add to My Library';
            addButton.id = 'add-to-lib-btn';
            addButton.classList.add('add-library-btn');
            bookCard.appendChild(cover);
            bookCard.appendChild(title);
            bookCard.appendChild(author);
            bookCard.appendChild(year);
            bookCard.appendChild(addButton);
            results.appendChild(bookCard);


        });


    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })