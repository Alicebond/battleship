function Ship(length) {
  const location = '';
  // 4 1-length ships, 3 2-length ships, 
  // 2 3-length ships, 1 4-length ships,

  // place
  const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const y = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  function setPlace(length) {
    let randomIndex = Math.floor(Math.random() * 10);
    const place = '';
    switch (length) {
      case 1:
        place += x.splice(randomIndex(), 1);
        place += y.splice(randomIndex(), 1);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
    }
    return place;
  }

  location = setPlace(length);

  return {
    length,
    location,
    sink,
  }
}
