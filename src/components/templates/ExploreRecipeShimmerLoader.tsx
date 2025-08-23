import React from 'react';
import { ShimmerLoader } from '@atoms/ShimmerLoader';

export default function ExportRecipeShimmerLoader({ count = 11 }: { count?: number }) {
    return Array.from({ length: count }).map((_, idx) => (
        <ShimmerLoader key={idx} width="w-[22.5%]" height="h-52" />
    ));
}