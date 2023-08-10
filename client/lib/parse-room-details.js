export default function ParseRoomDetails(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }

  const split = hashRoute.split('=');

  return ((split[1]));

}
