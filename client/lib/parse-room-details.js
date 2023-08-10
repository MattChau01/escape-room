export default function ParseRoomDetails(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }

  const split = hashRoute.split('=');
  // console.log('hashRoute: ', split);
  // console.log('splitted num: ', (split[1]));

  // ORIGINAL:
  return ((split[1]));

  // NEW:
  // return (Number(split[0]));

}
