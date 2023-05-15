export default function ParseRoute(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  const [path, queryString] = hashRoute.slice('?');
  const params = new URLSearchParams(queryString);
  return { path, params };
}
