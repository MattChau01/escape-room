export default function ParseRoomDetails(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }

  const split = hashRoute.split('=');

  // ORIGINAL:
  // return (Number(split[1]));

  // NEW:
  return (Number(split[0]));

}
