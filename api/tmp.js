module.exports = async (req, res) => {
  const u = String(req.query.u || '');
  let h = ''; try { h = new URL(u).hostname; } catch (e) {}
  if (!/(^|\.)ytimg\.com$/.test(h)) return res.status(400).send('no');
  try {
    const r = await fetch(u);
    const b = Buffer.from(await r.arrayBuffer());
    res.setHeader('content-type', 'text/plain');
    res.status(200).send(r.status + '|' + b.toString('base64'));
  } catch (e) { res.status(200).send('ERR|' + e.message); }
};
