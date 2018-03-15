// Code your solution in this file!
const hq = 42
const block_feet = 264

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * block_feet
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * block_feet
}
