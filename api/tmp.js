module.exports = async (req, res) => {
  const u = String(req.query.u || '');
  let h = ''; try { h = new URL(u).hostname; } catch (e) {}
  if (!/(^|\.)(kast\.xyz|framerusercontent\.com|website-files\.com|sanity\.io|prismic\.io|ctfassets\.net)$/.test(h)) return res.status(400).send('no');
  try {
    const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36', 'accept-language': 'en' } });
    const b = Buffer.from(await r.arrayBuffer());
    res.setHeader('content-type', 'text/plain');
    if (req.query.m === 'scan') {
      const t = b.toString('utf8'); const set = {};
      (t.match(/https?:\/\/[^"'\s)\\<>]+?\.(?:svg|png|webp)(?:\?[^"'\s)\\<>]*)?/g) || []).forEach(x => set[x] = 1);
      (t.match(/(?:src|href)="(\/[^"]+?\.(?:svg|png|webp|ico))"/g) || []).forEach(x => set[x] = 1);
      const svgs = (t.match(/<svg[\s\S]{0,6000}?<\/svg>/g) || []).slice(0, 6);
      return res.status(200).send(r.status + ' len=' + t.length + '\n' + Object.keys(set).slice(0, 120).join('\n') + '\n---SVG---\n' + svgs.join('\n@@@\n'));
    }
    res.status(200).send(r.status + '|' + (r.headers.get('content-type') || '') + '|' + b.toString('base64'));
  } catch (e) { res.status(200).send('ERR|' + e.message); }
};
