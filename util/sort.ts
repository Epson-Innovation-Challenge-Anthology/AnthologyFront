export function sortAndReturnTopN<T>(objects: T[], sortFunction: (a: T, b: T) => number, n: number): T[] {
    return objects.sort(sortFunction).slice(0, n);
}