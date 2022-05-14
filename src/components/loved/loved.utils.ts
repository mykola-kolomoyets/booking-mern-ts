const minRatings = {
    max: 10,
    min5: 9,
    min4: 8,
    min3: 6,
    min2: 4,
    min: 1
}

enum RatingStatuses {
    min5 = 'Exceptional',
    min4 = 'Excellent',
    min3 = 'Good',
    min2 = 'Not so good',
    min = 'Bad'
}

export const gatRatingStatus = (rating: number) => {
    if (rating < minRatings.min || rating > minRatings.max) return '';

    if (rating <= minRatings.min2) return RatingStatuses.min;

    if (rating > minRatings.min2 && rating <= minRatings.min3) return RatingStatuses.min2;

    if (rating > minRatings.min3 && rating <= minRatings.min4) return RatingStatuses.min3;

    if (rating > minRatings.min4 && rating <= minRatings.min5) return RatingStatuses.min4;

    if (rating > minRatings.min5) return RatingStatuses.min5;
}