export const generateBookUri = book => ({ uri:`https${book.image.url.substring(4)}?id=${book.id}` });

export const bookCompare = (a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1;

export const bookFilter = (book, search) => book.title.toLowerCase().includes(search.toLowerCase());
