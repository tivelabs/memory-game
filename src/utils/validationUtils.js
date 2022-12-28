const validXY = (position, xLength, yLength) => {
  let positionX = null;
  let positionY = null;
  let validX = false;
  let validY = false;

  if (position.length === 3) {
    const positionArray = position.split('');
    if (positionArray[1] === ',') {

      positionX = parseInt(positionArray[0]);
      positionY = parseInt(positionArray[2]);
      
      if (isNaN(positionX)) {
        return {valid: false};
      } else {
        if (positionX >= 0 && positionX <= xLength-1) {
          validX = true;
        } else {
          return {valid: false};
        }
      }
      if (isNaN(positionY)) {
        return {valid: false};
      } else {
        if (positionY >= 0 && positionY <= yLength-1) {
          validY = true;
        } else {
          return {valid: false};
        }
      }
    } else {
      return {valid: false};
    }
  } else {
    return {valid: false};
  }
  if (validX && validY) {
    return {
      valid: true,
      positionX,
      positionY,
    }
  } else {
    return {valid: false}
  }
};

const validationUtils = {
  validXY,
};

export default validationUtils;
