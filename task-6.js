function countRepetitions(value) {
  const counts = new Map();

  value.forEach((element) => {
    const count = counts.get(element) || 0;

    counts.set(element, count + 1);
  });

  return counts.entries();
}
