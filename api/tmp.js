module.exports = async (req, res) => {
  const u = String(req.query.u || '');
  let h = ''; try { h = new URL(u).hostname; } catch (e) {}
  if (!/(^|\.)(youtube\.com|ytimg\.com)$/.test(h)) return res.status(400).send('no');
  try {
    const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36', 'accept-language': 'en', cookie: 'CONSENT=YES+1; SOCS=CAI' } });
    const b = Buffer.from(await r.arrayBuffer());
    res.setHeader('content-type', 'text/plain');
    if (req.query.m === 'ids') {
      const t = b.toString('utf8'); const out = []; const re = /"videoId":"([\w-]{11})".{0,1500}?"title":\{"runs":\[\{"text":"(.*?)"\}/g; let m; const seen = {};
      while ((m = re.exec(t)) && out.length < 40) { if (!seen[m[1]]) { seen[m[1]] = 1; out.push(m[1] + ' ' + m[2]); } }
      return res.status(200).send(r.status + '\n' + out.join('\n'));
    }
    res.status(200).send(r.status + '|' + b.toString('base64'));
  } catch (e) { res.status(200).send('ERR|' + e.message); }
};
