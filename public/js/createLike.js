const likeBtn = document.querySelector('#like');
const dislikeBtn = document.querySelector('#dislike');
const createLike = async (e) => {
  e.stopPropagation();
  const post_id = e.target.dataset.id;
  const like = true;
  if (post_id) {
    const likeIt = await fetch('/like', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        like,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (likeIt.ok) {
      location.reload();
    }
  }
};

const createDislike = async (e) => {
  e.stopPropagation();
  const post_id = e.target.dataset.id;
  const like = false;
  const likeIt = await fetch('/like', {
    method: 'POST',
    body: JSON.stringify({
      post_id,
      like,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (likeIt.ok) {
    location.reload();
  }
};
if (likeBtn) likeBtn.addEventListener('click', createLike);
if (dislikeBtn) dislikeBtn.addEventListener('click', createDislike);
