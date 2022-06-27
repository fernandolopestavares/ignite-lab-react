import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    //'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYyODIyNjAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG96d3JsMDFpZG8wMXo0YmFsNGM5amsvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzQ4MzM1NDYtYjYyOC00MzBjLWFiNzMtYWQwYjAxNjE5YzNhIiwianRpIjoiY2w0dnZvemdyMXg3OTAxdW84aXBiYnpnayJ9.XFnxiHkHH9Ulp5-m2fA1s8BlzsApX8kksKcWckOTMtZ3Sm2mO4f1M0dk-FqsA90wGNOQGdUH6rjMUpIxOZNqXipGTqQD5okYNprfOK4E5KkfdE7VKsg8GVNVHb1r8HWH286EDFfD7EfU-qLEzlvt--dMsbnQNyBA_RJg1rlk9dML1m8toaG1lPtffoBtApnMj2seuxyZlsjsKBqQ2V40PVl89JEVO5VJ9Aa-Wr57WSLEW2prH8vsWHm-z2G3QkCHDC0QQ7BApBpi8R9VVnzlcUPxzgzBzEH4FTUy3R0CGq8XN6B_IWqL0ZW83c4CrtMEBB4Flb0q3YpBZdSQR4IlmYkGwlC31CEq-8Es5m_SE6ezChTYzz93-pjEArN7CI0LPI9cenqUTVGW1U22mw31olbTMkhfoAOWf4FvQTjoKerP3gwGPfrkPVi_RCz7UT2GsMfK8_kzXTUhBGwgrLeVr9oGeusxYU9WoPSDXfvwkBVCYy4gfJckSQIEO93DuRRAMYySK6rY-bqx4dOO1GyruDQ0VQ8uZFn0sSF3qvlK8jKQi40s5u17Bp5uANBA-dk5ws5f9hoSQH_G08gQzH-fMTi-9xXpnqOnW_pRRCCd8t2hytPqBzYoGv5LjcQBThYa9_N3qgbmcu6Pq2wNc153TawUyyO1S8H5Om46KI1BhE4`
  },
  cache: new InMemoryCache()
})