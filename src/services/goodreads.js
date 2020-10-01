import axios from "axios";
import { parseString } from "xml2js";

const cors = "https://cors-anywhere-jnb.herokuapp.com";
const base_url = "https://www.goodreads.com";
const key = process.env.REACT_APP_GOODREADS_KEY;

export const getCurrentlyReading = async (setBook) => {
  const endpoint = "review/list?v=2";
  const id = "65510527";
  const shelf = "currently-reading";

  const url = `${cors}/${base_url}/${endpoint}&key=${key}&id=${id}&shelf=${shelf}`;

  const result = await axios.get(url);

  parseString(result.data, (err, res) => {
    if (err) {
      return null;
    } else {
      // prettier-ignore
      const { authors, title } = res.GoodreadsResponse.reviews[0].review[0].book[0];

      const book = {
        title: title[0],
        author: authors.map(({ author }) => author[0].name[0])[0],
      };

      setBook(book);
    }
  });
};
