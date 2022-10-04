import {describe, test, expect} from '@jest/globals'
import {sortPointsByXandY, isPointsClockwiseTurned, calculateConvexHull} from '../../convexHull/convexHull'

describe('convex hull', () => {
    const input = [[-2, -2], [-2, -1], [-2, 1], [-1, 0], [0, 1], [-1, 2], [1, 2], [1, 1], [2, 2], [2, 0], [3, 0], [3, -1], [3, -2], [2, -2], [1, -3], [1, -2], [0, -1], [0, -3]]
    const sortedByX = [[-2, -2], [-2, -1], [-2, 1], [-1, 0], [-1, 2], [0, 1], [0, -1], [0, -3], [1, 2], [1, 1], [1, -3], [1, -2], [2, 2], [2, 0], [2, -2], [3, 0], [3, -1], [3, -2]]
    const sortedByXandY = [[-2, -2], [-2, -1], [-2, 1], [-1, 0], [-1, 2], [0, -3], [0, -1], [0, 1], [1, -3], [1, -2], [1, 1], [1, 2], [2, -2], [2, 0], [2, 2], [3, -2], [3, -1], [3, 0]]
    const convexHull = [[-2, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 2], [3, 0], [3, -1], [3, -2], [1, -3], [0, -3]]
    test('sorting by x and y', () => {
        expect(sortPointsByXandY(input)).toEqual(sortedByXandY)
    })
    test('points clockwise turned', () => {
        expect(isPointsClockwiseTurned([[0, 0], [0, 1], [1, 0]])).toBeTruthy()
        expect(isPointsClockwiseTurned([[0, 0], [1, 0], [0, 1]])).toBeFalsy()
        expect(isPointsClockwiseTurned([[1, -2], [0, -1], [0, -3]])).toBeFalsy()
    })
    test('convex hull', () => {
        expect(calculateConvexHull(input)).toEqual(convexHull)
    })
})