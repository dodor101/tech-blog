const delButtonHandler = async (event) => {
  try {
    const id = event.target.getAttribute('data-id');

    if (id) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
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

document.querySelector('.del-post').addEventListener('click', delButtonHandler);
