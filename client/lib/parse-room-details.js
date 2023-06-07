export default function ParseRoomDetails(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }

  const split = hashRoute.split('=');

  // const [path, queryString] = split[1];

  // const params = new URLSearchParams(queryString);
  // return { path, params };
  return (Number(split[1]) - 1);
}
