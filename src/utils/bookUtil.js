export const generateBookUri = book => ({ uri:`https${book.image.url.substring(4)}?id=${book.id}` });

