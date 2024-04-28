/**
 * We use a Map called cache to store URL-IP mappings.
For each URL in the urls array:
If the URL is found in the cache, we add cacheTime to the totalTime.
If the URL is not found in the cache, we add serverTime to the totalTime.
If the cache is full (cache.size === cacheSize), we remove the least recently used URL from the cache before adding the new URL.
Finally, we return the totalTime representing the minimum time taken to resolve all DNS requests.
 */

function minDnsResolveTime(urls, cacheSize, cacheTime, serverTime) {
    const cache = new Map(); // Map to store URL-IP mappings
    let totalTime = 0;

    for (let url of urls) {
        if (cache.has(url)) {
            // If URL is found in cache, add cache time to total time
            totalTime += cacheTime;
        } else {
            // If URL is not found in cache, add server time to total time
            totalTime += serverTime;

            // Check if cache is full
            if (cache.size === cacheSize) {
                // Remove the least recently used URL from cache
                const lru = [...cache.keys()][0];
                cache.delete(lru);
            }

            // Add the URL to cache
            cache.set(url, true);
        }
    }

    return totalTime;
}

// Example usage:
const urls = ["example.com", "google.com", "example.com", "yahoo.com"];
const cacheSize = 2;
const cacheTime = 5;
const serverTime = 10;
console.log(minDnsResolveTime(urls, cacheSize, cacheTime, serverTime)); // Output: 25
