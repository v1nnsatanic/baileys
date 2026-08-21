const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n[ ! ] wkwk nodejs Luh masih jaman berapa njir, ganti tu anjing nodenya\n` +
    `   Versi sekarang : ${process.versions.node}\n` +
    `   Minimal        : Node.js 20+\n\n` +
    `   Upgrade dulu makanya biar lancar\n`
    `   ©2026 - v1nnsatanic\n`
  );
  process.exit(1);
}
