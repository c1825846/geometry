function calculateConvexHull(polygonPoints: number[][]): number[][] {
    if (polygonPoints.length < 3) return polygonPoints
    const upper = []
    const lower = []
    const sortedPoints = sortPointsByXandY(polygonPoints)
    upper.push(sortedPoints[0])
    upper.push(sortedPoints[1])
    for (let i = 2; i < sortedPoints.length; i++) {
        upper.push(sortedPoints[i])
        while (upper.length > 2 && !isPointsClockwiseTurned([upper[upper.length - 3], upper[upper.length - 2], upper[upper.length - 1]])) {
            upper.splice(-2, 1)
        }
    }
    sortedPoints.reverse()
    lower.push(sortedPoints[0])
    lower.push(sortedPoints[1])
    for (let i = 2; i < sortedPoints.length; i++) {
        lower.push(sortedPoints[i])
        while (lower.length > 2 && !isPointsClockwiseTurned([lower[lower.length - 3], lower[lower.length - 2], lower[lower.length - 1]])) {
            lower.splice(-2, 1)
        }
    }
    upper.splice(-1, 1)
    lower.splice(-1, 1)
    return [...upper, ...lower]
}

function sortPointsByXandY(points: number[][]): number[][] {
    return points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
}

function isPointsClockwiseTurned(points: number[][]): boolean {
    return (points[1][0] - points[0][0]) * (points[2][1] - points[0][1]) - (points[2][0] - points[0][0]) * (points[1][1] - points[0][1]) <= 0
}

export {sortPointsByXandY, isPointsClockwiseTurned, calculateConvexHull}