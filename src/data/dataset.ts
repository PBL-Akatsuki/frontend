// src/data/dataset.ts

const dataset = [
    { sunlight: 0, water: 0, growth: 0.0 },
    { sunlight: 0, water: 1, growth: 0.0 },
    { sunlight: 0, water: 2, growth: 0.0 },
    { sunlight: 0, water: 3, growth: 10.8 },
    { sunlight: 0, water: 4, growth: 25.92 },
    { sunlight: 0, water: 5, growth: 24.18 },
    { sunlight: 0, water: 6, growth: 2.29 },
    { sunlight: 0, water: 7, growth: 11.1 },
    { sunlight: 0, water: 8, growth: 33.41 },
    { sunlight: 0, water: 9, growth: 17.18 },
    { sunlight: 0, water: 10, growth: 27.75 },
    { sunlight: 1, water: 0, growth: 10.5 },
    { sunlight: 1, water: 1, growth: 0.0 },
    { sunlight: 1, water: 2, growth: 12.05 },
    { sunlight: 1, water: 3, growth: 0.66 },
    { sunlight: 1, water: 4, growth: 10.99 },
    { sunlight: 1, water: 5, growth: 23.2 },
    { sunlight: 1, water: 6, growth: 7.07 },
    { sunlight: 1, water: 7, growth: 30.4 },
    { sunlight: 1, water: 8, growth: 28.8 },
    { sunlight: 1, water: 9, growth: 37.52 },
    { sunlight: 1, water: 10, growth: 37.24 },
    { sunlight: 2, water: 0, growth: 23.64 },
    { sunlight: 2, water: 1, growth: 14.25 },
    { sunlight: 2, water: 2, growth: 11.71 },
    { sunlight: 2, water: 3, growth: 20.22 },
    { sunlight: 2, water: 4, growth: 27.43 },
    { sunlight: 2, water: 5, growth: 25.49 },
    { sunlight: 2, water: 6, growth: 28.41 },
    { sunlight: 2, water: 7, growth: 23.98 },
    { sunlight: 2, water: 8, growth: 27.37 },
    { sunlight: 2, water: 9, growth: 22.97 },
    { sunlight: 2, water: 10, growth: 57.5 },
    { sunlight: 3, water: 0, growth: 2.56 },
    { sunlight: 3, water: 1, growth: 11.07 },
    { sunlight: 3, water: 2, growth: 13.82 },
    { sunlight: 3, water: 3, growth: 32.95 },
    { sunlight: 3, water: 4, growth: 24.05 },
    { sunlight: 3, water: 5, growth: 42.48 },
    { sunlight: 3, water: 6, growth: 26.27 },
    { sunlight: 3, water: 7, growth: 38.79 },
    { sunlight: 3, water: 8, growth: 30.65 },
    { sunlight: 3, water: 9, growth: 63.45 },
    { sunlight: 3, water: 10, growth: 33.12 },
    { sunlight: 4, water: 0, growth: 23.1 },
    { sunlight: 4, water: 1, growth: 29.34 },
    { sunlight: 4, water: 2, growth: 30.14 },
    { sunlight: 4, water: 3, growth: 27.15 },
    { sunlight: 4, water: 4, growth: 30.7 },
    { sunlight: 4, water: 5, growth: 35.44 },
    { sunlight: 4, water: 6, growth: 36.53 },
    { sunlight: 4, water: 7, growth: 50.64 },
    { sunlight: 4, water: 8, growth: 66.11 },
    { sunlight: 4, water: 9, growth: 41.43 },
    { sunlight: 4, water: 10, growth: 36.3 },
    { sunlight: 5, water: 0, growth: 24.12 },
    { sunlight: 5, water: 1, growth: 53.8 },
    { sunlight: 5, water: 2, growth: 22.96 },
    { sunlight: 5, water: 3, growth: 50.39 },
    { sunlight: 5, water: 4, growth: 53.78 },
    { sunlight: 5, water: 5, growth: 34.46 },
    { sunlight: 5, water: 6, growth: 48.69 },
    { sunlight: 5, water: 7, growth: 62.28 },
    { sunlight: 5, water: 8, growth: 45.21 },
    { sunlight: 5, water: 9, growth: 49.96 },
    { sunlight: 5, water: 10, growth: 49.18 },
    { sunlight: 6, water: 0, growth: 19.85 },
    { sunlight: 6, water: 1, growth: 26.51 },
    { sunlight: 6, water: 2, growth: 23.76 },
    { sunlight: 6, water: 3, growth: 39.34 },
    { sunlight: 6, water: 4, growth: 34.3 },
    { sunlight: 6, water: 5, growth: 47.34 },
    { sunlight: 6, water: 6, growth: 32.44 },
    { sunlight: 6, water: 7, growth: 54.31 },
    { sunlight: 6, water: 8, growth: 62.34 },
    { sunlight: 6, water: 9, growth: 37.06 },
    { sunlight: 6, water: 10, growth: 63.74 },
    { sunlight: 7, water: 0, growth: 47.28 },
    { sunlight: 7, water: 1, growth: 25.9 },
    { sunlight: 7, water: 2, growth: 57.73 },
    { sunlight: 7, water: 3, growth: 48.19 },
    { sunlight: 7, water: 4, growth: 39.95 },
    { sunlight: 7, water: 5, growth: 49.44 },
    { sunlight: 7, water: 6, growth: 58.58 },
    { sunlight: 7, water: 7, growth: 56.76 },
    { sunlight: 7, water: 8, growth: 64.39 },
    { sunlight: 7, water: 9, growth: 52.79 },
    { sunlight: 7, water: 10, growth: 66.69 },
    { sunlight: 8, water: 0, growth: 25.86 },
    { sunlight: 8, water: 1, growth: 41.89 },
    { sunlight: 8, water: 2, growth: 36.96 },
    { sunlight: 8, water: 3, growth: 41.64 },
    { sunlight: 8, water: 4, growth: 64.36 },
    { sunlight: 8, water: 5, growth: 65.91 },
    { sunlight: 8, water: 6, growth: 64.09 },
    { sunlight: 8, water: 7, growth: 50.08 },
    { sunlight: 8, water: 8, growth: 60.84 },
    { sunlight: 8, water: 9, growth: 79.13 },
    { sunlight: 8, water: 10, growth: 71.42 },
    { sunlight: 9, water: 0, growth: 68.19 },
    { sunlight: 9, water: 1, growth: 51.93 },
    { sunlight: 9, water: 2, growth: 52.92 },
    { sunlight: 9, water: 3, growth: 50.91 },
    { sunlight: 9, water: 4, growth: 58.34 },
    { sunlight: 9, water: 5, growth: 58.48 },
    { sunlight: 9, water: 6, growth: 70.08 },
    { sunlight: 9, water: 7, growth: 75.57 },
    { sunlight: 9, water: 8, growth: 61.14 },
    { sunlight: 9, water: 9, growth: 58.69 },
    { sunlight: 9, water: 10, growth: 56.64 },
    { sunlight: 10, water: 0, growth: 55.08 },
    { sunlight: 10, water: 1, growth: 41.97 },
    { sunlight: 10, water: 2, growth: 34.47 },
    { sunlight: 10, water: 3, growth: 62.89 },
    { sunlight: 10, water: 4, growth: 86.93 },
    { sunlight: 10, water: 5, growth: 64.94 },
    { sunlight: 10, water: 6, growth: 76.38 },
    { sunlight: 10, water: 7, growth: 71.82 },
    { sunlight: 10, water: 8, growth: 73.01 },
    { sunlight: 10, water: 9, growth: 86.19 },
    { sunlight: 10, water: 10, growth: 77.1 },
];
  
export default dataset;
  