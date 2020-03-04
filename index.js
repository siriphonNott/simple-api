const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;
const log     = require('log-to-file');
const today   = new Date()

app.get('/', (req, res) => {
  res.send({
    version: '1.0.14',
    status: 'ok'
  });
});

Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  var h = this.getHours();
  var m = this.getMinutes();
  var s = this.getSeconds();
  return `${[this.getFullYear(),(mm > 9 ? '' : '0') + mm,(dd > 9 ? '' : '0') + dd].join('-')} ${(h > 9 ? '' : '0')+h}:${(m > 9 ? '' : '0')+m}:${(s > 9 ? '' : '0')+s}`;
};

log(`[Restart]: Time: ${today.yyyymmdd()}`, 'log.log');

app.listen(port, () => console.log(`Server is running on port ${port}`));