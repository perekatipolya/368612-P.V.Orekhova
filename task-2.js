function invertCase(value) {
  const letters = value.split('');
  const changed = letters.map((char) => {
    const isLowerCase = char === char.toLowerCase();

    return isLowerCase ? char.toUpperCase() : char.toLowerCase();
  });

  return changed.join('');
}
