module.exports = async (req, res) => {
  const user = (req.query && req.query.u) || 'gerdelgado';
  let url = null, err = [];
  try {
    const r = await fetch('https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=' + user);
    const j = await r.json();
    url = j[0].profile_image_url_https.replace(/_(normal|bigger|200x200)\./, '.');
  } catch (e) { err.push('synd:' + e.message); }
  if (!url) url = 'https://unavatar.io/x/' + user + '?fallback=false';
  try {
    const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader('content-type', 'text/plain');
    res.status(200).send(url + '\n' + r.status + '\n' + r.headers.get('content-type') + '\n' + buf.toString('hex'));
  } catch (e) { res.status(500).send('fail ' + err.join(',') + ' ' + e.message); }
};
