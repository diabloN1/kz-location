
    // Handles GET requests to /api/products
    import { getXataClient } from '@/lib/xata';
    import { NextResponse } from 'next/server';

    export async function GET() {
    const xata = getXataClient();
    try {
        const categories = await xata.db.Demande_S.getAll();
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
    }
