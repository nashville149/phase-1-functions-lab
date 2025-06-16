// Returns the number of blocks from 42nd Street
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42);
}

// Returns the distance in feet from 42nd Street
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

// Returns the distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Calculates fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};