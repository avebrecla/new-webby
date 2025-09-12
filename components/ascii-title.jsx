const asciiArtLines = [
    "                             _                    _     ",
    "                            ( )                  | |    ",
    "   __ ___   _____ _ __ _   _|/ ___  __      _____| |__  ",
    "  / _` \\ \\ / / _ \\ '__| | | | / __| \\ \\ /\\ / / _ \\ '_ \\ ",
    " | (_| |\\ V /  __/ |  | |_| | \\__ \\  \\ V  V /  __/ |_) |",
    "  \\__,_| \\_/ \\___|_|   \\__, | |___/   \\_/\\_/ \\___|_.__/ ",
    "______________________  __/ | __________________________",
    "______________________ |___/  __________________________",
];

const rainbowColors = [
  'rgb(255, 0, 0)',      // Red
  'rgb(255, 64, 0)',     // Red-Orange
  'rgb(255, 127, 0)',    // Orange
  'rgb(255, 191, 0)',    // Orange-Yellow
  'rgb(255, 255, 0)',    // Yellow
  'rgb(191, 255, 0)',    // Yellow-Green
  'rgb(127, 255, 0)',    // Lime
  'rgb(0, 255, 0)',      // Green
  'rgb(0, 255, 127)',    // Spring Green
  'rgb(0, 255, 255)',    // Cyan
  'rgb(0, 191, 255)',    // Deep Sky Blue
  'rgb(0, 127, 255)',    // Dodger Blue
  'rgb(0, 0, 255)',      // Blue
  'rgb(75, 0, 130)',     // Indigo
  'rgb(111, 0, 255)',    // Violet-Blue
  'rgb(148, 0, 211)',    // Violet
  'rgb(199, 21, 133)',   // Medium Violet Red
  'rgb(255, 0, 127)'     // Pink
];

export function AsciiTitle() {
  return (
    <pre className="font-mono leading-none pb-5 pl-5 my-responsive-box">
      {asciiArtLines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              style={{ color: rainbowColors[charIndex % rainbowColors.length] }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </pre>
  );
};