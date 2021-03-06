const Ship = function (length) {
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
    };
    return place.split(' ');
  };

  location = setPlace(length);

  const showHitBlock = function (position) {
    // TODO:
    // Mark position as hit by adding a class
    // Make it unabe to click
  };

  const hit = function (str) {
    if (location.includes(str)) {
      length -= 1;
      showHitBlock(str);
      return true;
    } else return false;
  };

  const isSunk = function () {
    if (length === 0) return true;
    else return false;
  };

  return {
    length,
    location,
    hit,
    isSunk,
  };
};

const Gameboard = function () {
  let attackedPosition = [];

  const ship1 = Ship(1);
  const ship2 = Ship(1);
  const ship3 = Ship(1);
  const ship4 = Ship(1);
  const ship5 = Ship(2);
  const ship6 = Ship(2);
  const ship7 = Ship(2);
  const ship8 = Ship(3);
  const ship9 = Ship(3);
  const ship10 = Ship(4);
  const ships = [ship1, ship2, ship3, ship4, ship5, ship6, ship7, ship8, ship9, ship10];
  const placeShips = function (ships) {
    const positions = ships.map(ship => ship.location).flat();
    for (let item of positions) {
      // DOM manipulation
    }
  };

  const showMissShot = function (str) {
    // DOM manipulation
  };

  const receiveAttack = function (str) {
    attackedPosition.push(str);
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].location.includes(str)) {
        ships[i].hit(str);
      } else {
        showMissShot(str)
      }
    };
  };

  const ckeckAllSunk = function () {
    return ships.every(ship => ship.isSunk())
  };

  return {
    placeShips,
    receiveAttack,
    ckeckAllSunk,
  }
};

const Player = (function () {
  const computer = function () {
    const getRandomPos = function () {
      const x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      let randomIndex = Math.floor(Math.random() * 10);
      let randomPosition = '';
      randomPosition += x.splice(randomIndex, 1)[0];
      randomPosition += x.splice(randomIndex, 1)[0];
      return randomPosition;
    }

    const getValidPos = function () {
      let validPos = getRandomPos();
      if (attackedPosition.includes(validPos)) getValidPos();
      else return validPos;
    }

    Gameboard.receiveAttack(getValidPos());
  }

  const user = function () {
    const gameboard = document.querySelector('#user-gameboard');
    let blockId = gameboard.addEventListener(click, getAreaStr = () => gameboard.childElement.id);
    Gameboard.receiveAttack(blockId);
    computer();
  }

  user();
})();

const newGame = function () {

}

export {
  Ship,
  Gameboard,
}
