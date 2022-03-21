function Ship(length) {
  let location = undefined;
  // 4 1-length ships, 3 2-length ships, 
  // 2 3-length ships, 1 4-length ships,

  // place
  const x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const y = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
          let placeY = y.splice(specIndex, 4);
          place = `${placeX + placeY[0]} ${placeX + placeY[1]} ${placeX + placeY[2]} ${placeX + placeY[3]}`;
        } else {
          let specIndex = Math.floor(Math.random() * 7);
          let placeX = x.splice(specIndex, 4);
          let placeY = y.splice(randomIndex, 1)[0];
          place = `${placeX[0] + placeY} ${placeX[1] + placeY} ${placeX[2] + placeY} ${placeX[3] + placeY}`;
        }
    }
    return place.split(' ');
  }

  location = setPlace(length);

  let showHitBlock = function (position) {
    // TODO:
    // Mark position as hit by adding a class
    // Make it unabe to click
  }

  const hit = function (str) {

    if (location.includes(str)) {
      let a = location.length
      a = a - 1;
      isSunk(a)
      showHitBlock(str)
      return true;
    } else return false;
  }

  const isSunk = function (a) {
    if (a === 0) return true;
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
