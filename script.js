function Ship(length) {
  let location = undefined;
  // 4 1-length ships, 3 2-length ships, 
  // 2 3-length ships, 1 4-length ships,

  // place
  const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const y = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  function setPlace(length) {
    let place = '';
    let randomIndex = Math.floor(Math.random() * 10);
    let direction = Math.floor(Math.random() * 2);
    // 1 for vertical , 0 for horizontal;
    switch (length) {
      case 1:
        place += x.splice(randomIndex, 1)[0];
        place += y.splice(randomIndex, 1)[0];
        break;
      case 2:
        if (direction === 1) {
          let specIndex = Math.floor(Math.random() * 9);
          let placeX = x.splice(randomIndex, 1)[0];
          let placeY = y.splice(specIndex, 2);
          place = `${placeX + placeY[0]} ${placeX + placeY[1]}`;
        } else {
          let specIndex = Math.floor(Math.random() * 9);
          let placeX = x.splice(specIndex, 2);
          let placeY = y.splice(randomIndex, 1)[0];
          place = `${placeX[0] + placeY} ${placeX[1] + placeY}`;
        }
        break;
      case 3:
        if (direction === 1) {
          let specIndex = Math.floor(Math.random() * 8);
          let placeX = x.splice(randomIndex, 1)[0];
          let placeY = y.splice(specIndex, 3);
          place = `${placeX + placeY[0]} ${placeX + placeY[1]} ${placeX + placeY[2]}`;
        } else {
          let specIndex = Math.floor(Math.random() * 8);
          let placeX = x.splice(specIndex, 3);
          let placeY = y.splice(randomIndex, 1)[0];
          place = `${placeX[0] + placeY} ${placeX[1] + placeY} ${placeX[2] + placeY}`;
        }
        break;
      default:
        if (direction === 1) {
          let specIndex = Math.floor(Math.random() * 7);
          let placeX = x.splice(randomIndex, 1)[0];
          let placeY = y.splice(specIndex, 3);
          place = `${placeX + placeY[0]} ${placeX + placeY[1]} ${placeX + placeY[2]} ${placeX + placeY[3]}`;
        } else {
          let specIndex = Math.floor(Math.random() * 7);
          let placeX = x.splice(specIndex, 3);
          let placeY = y.splice(randomIndex, 1)[0];
          place = `${placeX[0] + placeY} ${placeX[1] + placeY} ${placeX[2] + placeY} ${placeX[3] + placeY}`;
        }
    }
    return place.split(' ');
  }

  location = setPlace(length);

  const hit = function (str) {
    // TODO:
    // Get the block of the position from html, mark it as hit by adding a class
    // Make it unabe to click

    if (location.includes(str)) {
      const index = location.indexOf(str);
      location.splice(index, 1);
    }
  }

  const isSunk = function () {
    if (location.length === 0) return true;
    else return false;
  }

  return {
    length,
    location,
    hit,
    isSunk,
  }
}

export {
  Ship,
}
