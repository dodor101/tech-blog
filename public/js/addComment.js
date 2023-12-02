const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post-id"]').value;

  const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();

  if (comment_text && post_id) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

document.querySelector('.add-comment-form').addEventListener('submit', commentFormHandler);

const deleteComment = async (e) => {
  try {
    const id = e.target.dataset.id;
    console.log(id);
    const post_id = document.querySelector('input[name="post-id"]').value;
    console.log(post_id);
    if (id) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        document.location.replace('/');
      } else {
        alert('Something went wrong');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const comment = document.querySelector('.comments');

if (comment) comment.addEventListener('click', deleteComment);
