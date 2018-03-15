// Code your solution in this file!
const hq = 42
const block_feet = 264

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * block_feet
}
