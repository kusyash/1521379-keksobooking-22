const createFetch = (input, params = {}, onSuccess, onFail) => {
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

        response.json()
          .then((data) => {
            onSuccess(data);
          });

      } else if (response.status === 400) {

        response.json()
          .then((errors) => {
            onFail(errors);
          });

      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }


    })
    .catch((error) => {
      onFail(error);
    });
};

export { createFetch };
