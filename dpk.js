const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
exports.deterministicPartitionKey = (event) => {
  let candidate = exports.getPartitionKey(event);
  
 if(!candidate){
  return TRIVIAL_PARTITION_KEY
 }else if(typeof candidate !== "string") {
  return JSON.stringify(candidate);
 }else if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = exports.hashPartitionKey(candidate);
 }

  return candidate;
};


exports.getPartitionKey = (event) => {
  if (event?.partitionKey) {
    return event.partitionKey;
  } else if (event) {
    return exports.hashPartitionKey(JSON.stringify(event));
  }
  return null;
};

exports.hashPartitionKey = (partitionKey) => {
  return exports.hashData(partitionKey);
};

exports.hashData = (partitionKey) => {
  return crypto.createHash("sha3-512").update(partitionKey).digest("hex");
};
