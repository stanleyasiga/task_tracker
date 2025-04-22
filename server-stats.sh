#!/usr/bin/env node
console.log("performance of linux web server");

const os = require('os');

const cpus = os.cpus();

const { exec } = require('child_process');

const used = process.memoryUsage();
const totalMem = os.totalmem();

cpus.forEach((cpu, i) => {
  const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
  const usage = ((total - cpu.times.idle) / total) * 100;

  console.log(`Core ${i + 1}: ${usage.toFixed(2)}% used`);
});

console.log('Total System Memory:', (totalMem / 1024 / 1024).toFixed(2), 'MB');
console.log('Memory Used by Node.js:');
console.log(`- RSS         : ${(used.rss / 1024 / 1024).toFixed(2)} MB`);
console.log(`- Heap Total  : ${(used.heapTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`- Heap Used   : ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`);
console.log(`- External    : ${(used.external / 1024 / 1024).toFixed(2)} MB`);


exec('df -h /', (err, stdout, stderr) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Disk usage:\n' + stdout);
});

