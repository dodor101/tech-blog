// TODO: for future helpers creation
module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },

  getLikesLength: (likeTables) => {
    if (likeTables) {
      const numberOfLikes = likeTables.filter((like) => like.like === true);
      return numberOfLikes.length;
    }
  },
  getDislikesLength: (likeTables) => {
    if (likeTables) {
      const numberOfDislikes = likeTables.filter((like) => like.like === false);
      return numberOfDislikes.length;
    }
  },
};
