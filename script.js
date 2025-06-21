function firstWord(s) {
  // Trim leading spaces first to handle cases like ' Hello World!'
  s = s.trimStart();

  // Find the index of first space
  const spaceIndex = s.indexOf(' ');

  // If no space found, return the whole string
  if (spaceIndex === -1) return s;

  // Else return substring from start to first space
  return s.substring(0, spaceIndex);
}

// Example usage (uncomment to test):
// const s = prompt("Enter String:");
// alert(firstWord(s));
