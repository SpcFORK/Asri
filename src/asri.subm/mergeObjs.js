window.mergeObjects$ = (...objects) => objects.reduce((merged, obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      merged[key] = mergeObjects(merged[key] || {}, obj[key]);
    } else {
      merged[key] = obj[key];
    }
  });
  return merged;
}, {});