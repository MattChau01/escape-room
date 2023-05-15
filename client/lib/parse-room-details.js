export default function ParseRoomDetails(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  // console.log('hashRoute: ', hashRoute);

  const split = hashRoute.split('=');

  // console.log('split: ', typeof split[1]);

  // const [path, queryString] = split[1];
  // console.log('path: ', path);
  // console.log('queryString: ', queryString);

  // const params = new URLSearchParams(queryString);
  // return { path, params };
  return (Number(split[1]) - 1);
}
