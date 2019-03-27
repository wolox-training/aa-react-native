import imageBook1 from '../../assets/img_book1.png';
import imageBook2 from '../../assets/img_book2.png';
import imageBook3 from '../../assets/img_book3.png';
import imageBook4 from '../../assets/img_book4.png';
import imageBook5 from '../../assets/img_book5.png';

import imageUser1 from '../../assets/img_user1.png';
import imageUser2 from '../../assets/img_user2.png';

export const user1 = { name: 'John Appleseed', imageSource: imageUser1 };
export const user2 = { name: 'Susan Collins', imageSource: imageUser2 };

export const defaultBooks = [
    { id: 0, title: 'A Little Bird Told Me', author: 'Timothy Cross', imageSource: imageBook1, year: '2015', type: 'Bible Study', comments: [{ id: 1, user: user1, comment: 'It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.'} ] },
    { id: 1, title: 'When the Doves Disappeared', author: 'Sofi Oksanen', imageSource: imageBook2, year: '2012', type: 'Novel', comments: [{ id: 1, user: user1, comment: 'It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.'}, { id: 2, user: user2, comment: 'Let’s definitely get that coffe It was great to see you again earlier. ' } ] },
    { id: 2, title: 'The Best Book in the World', author: 'Peter Sjernstrom', imageSource: imageBook3, year: '2013', type: 'Novel', comments: [{ id: 1, user: user1, comment: 'It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.'}, { id: 2, user: user2, comment: 'Let’s definitely get that coffe It was great to see you again earlier. ' } ] },
    { id: 3, title: 'Be Creative', author: 'Tony Alcazar', imageSource: imageBook4, year: '2013', type: 'Novel', comments: [{ id: 1, user: user1, comment: 'It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.'}, { id: 2, user: user2, comment: 'Let’s definitely get that coffe It was great to see you again earlier. ' } ] },
    { id: 4, title: 'Redesign the Web', author: 'Liliana Castilla', imageSource: imageBook5, year: '2013', type: 'Novel', comments: [{ id: 1, user: user1, comment: 'It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.'}, { id: 2, user: user2, comment: 'Let’s definitely get that coffe It was great to see you again earlier. ' } ] }
];
