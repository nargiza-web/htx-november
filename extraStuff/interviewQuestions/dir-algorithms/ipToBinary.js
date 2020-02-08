function ipBinary(ipStr) {
  let ip = ipStr.split(".");
  let binary = "";
  let zero = "0";
  ip.forEach(subnet => {
    let subnetBinary = "";
    while (subnet > 0) {
      subnetBinary = (subnet % 2) + subnetBinary;
      subnet = Math.floor(subnet / 2);
    }
    while (subnetBinary.length < 8) {
      subnetBinary = zero + subnetBinary;
    }
    binary = binary + subnetBinary;
  });
  return binary;
}

console.log(ipBinary("127.0.0.1"));
