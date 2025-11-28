export interface Food {
    id: string;
    name: string;
    thumbnailUrl?: string;
    imageUrls?: string[];
    description: string;
    rating?: number;
    category: string;
    servingSize: string;
    price: number;
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fats?: number;
}