#!/usr/bin/env node
console.log("performance of linux web server");

const os = require('os');  


function getCpuUsage() {
  const cpus = os.cpus();
  let totalIdle = 0;
  let totalTick = 0;

  cpus.forEach((core) => {
    for (const type in core.times) {
      totalTick += core.times[type];
    }
    totalIdle += core.times.idle;
  });

  const idle = totalIdle / cpus.length;
  const total = totalTick / cpus.length;

  const usagePercent = ((1 - idle / total) * 100).toFixed(2);

  console.log(`CPU Usage: ${usagePercent}%`);
}

getCpuUsage();


const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const usedMemory = totalMemory - freeMemory;

const usedMemoryPercent = ((usedMemory / totalMemory) * 100).toFixed(2);
const freeMemoryPercent = ((freeMemory / totalMemory) * 100).toFixed(2);

// Convert to MB for easier reading
const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

console.log(`Total Memory: ${toMB(totalMemory)} MB`);
console.log(`Used Memory: ${toMB(usedMemory)} MB (${usedMemoryPercent}%)`);
console.log(`Free Memory: ${toMB(freeMemory)} MB (${freeMemoryPercent}%)`);




