const createFetch = (input, params = {}, onSuccess, onError) => {
  return fetch(
    input,
    {
      ...{
        method: 'GET',
        credentials: 'same-origin',
      },
      ...params,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

export { createFetch };
