module.exports = async (req, res) => {
  const u = 'https://substack-video.s3.amazonaws.com/video_upload/post/224294600/bf3bd969-28aa-48d0-855e-b35ac66e45a9/transcoded-1794313667.png';
  const cdn = 'https://substackcdn.com/image/fetch/w_1280,c_limit,f_jpg,q_auto:good/' + encodeURIComponent(u);
  try {
    const r = await fetch(cdn);
    const b = Buffer.from(await r.arrayBuffer());
    res.setHeader('content-type', 'text/plain');
    res.status(200).send(r.status + '|' + b.toString('base64'));
  } catch (e) { res.status(200).send('ERR|' + e.message); }
};
