const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post-id"]').value;

  const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();

  if (comment_text&& post_id) {
    await fetch('/comment', {
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
