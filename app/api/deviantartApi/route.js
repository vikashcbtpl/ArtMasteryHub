import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  try {
    // Get the token from DeviantArt API
    const tokenResponse = await axios.post('https://www.deviantart.com/oauth2/token', null, {
      params: {
        grant_type: 'client_credentials',
        client_id: process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_SECRET,
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Call the DeviantArt collection API using the token
    const collectionResponse = await axios.get('https://www.deviantart.com/api/v1/oauth2/collections/all', {
      headers: {
        Authorization: `Bearer ${accessToken}`,  // Use Bearer token for authentication
      },
      params: {
        username:userId,
        offset:2,
        limit:24,     
        mature_content: false, 
      },
    });
    return NextResponse.json(collectionResponse.data);
  } catch (error) {
    console.error('DeviantArt API error:', error.response?.data || error.message);

    return NextResponse.json({
      error: 'Error fetching data from DeviantArt',
      details: error.response?.data || error.message,
    }, { status: 500 });
  }
}
