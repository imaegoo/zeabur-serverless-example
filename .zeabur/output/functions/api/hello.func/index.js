module.exports = (req, res) => {
  const { name = "friend" } = req.query;

  console.log(".zeabur/output/functions/index.func/api/hello.func/index.js");
  console.log(req);

  const text =
    `Howdy ${name}, from Zeabur!\n` +
    `Node.js: ${process.version}\n` +
    `Request URL: ${req.url}\n` +
    `Server time: ${new Date().toISOString()})`;

  res.setHeader("Content-Type", "text/plain");
  res.end(text);
};
