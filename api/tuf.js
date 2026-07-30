export default async function handler(req, res) {
  const { endpoint, year, username = 'Akashyatinjain' } = req.query || {};

  let targetUrl = '';
  if (endpoint === 'progress') {
    targetUrl = `https://backend-go.takeuforward.org/api/v1/progress/dsa/${username}`;
  } else if (endpoint === 'heatmap') {
    const yr = year || new Date().getFullYear();
    targetUrl = `https://backend-go.takeuforward.org/api/v1/streak/heatmap/${username}?year=${yr}`;
  } else {
    return res.status(400).json({ success: false, message: 'Invalid endpoint specified' });
  }

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Origin': 'https://takeuforward.org',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ success: false, message: 'Backend returned error' });
    }

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
