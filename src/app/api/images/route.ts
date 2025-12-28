import { NextRequest, NextResponse } from 'next/server';
import { readdirSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dir = searchParams.get('dir');

  if (!dir) {
    return NextResponse.json({ error: 'Directory parameter is required' }, { status: 400 });
  }

  try {
    
    const safePath = decodeURIComponent(dir).replace(/\.\./g, '');
    const fullPath = join(process.cwd(), 'public', safePath);

    const files = readdirSync(fullPath);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

    const images = files
      .filter((file) => imageExtensions.some((ext) => file.toLowerCase().endsWith(ext)))
      .map((file) => `/${safePath}/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
}
