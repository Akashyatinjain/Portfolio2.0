import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  const year = searchParams.get('year');
  const username = searchParams.get('username') || 'Akashyatinjain';

  let targetUrl = '';
  if (endpoint === 'progress') {
    targetUrl = `https://backend-go.takeuforward.org/api/v1/progress/dsa/${username}`;
  } else if (endpoint === 'heatmap') {
    const yr = year || new Date().getFullYear();
    targetUrl = `https://backend-go.takeuforward.org/api/v1/streak/heatmap/${username}?year=${yr}`;
  } else {
    return NextResponse.json(
      { success: false, message: 'Invalid endpoint specified' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        Origin: 'https://takeuforward.org',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Backend returned error' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
