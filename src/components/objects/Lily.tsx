export default function Lily() {
  return (
    <svg width="50" height="50" viewBox="0 0 100 100">
      <ellipse cx="50" cy="25" rx="10" ry="24" fill="#FFD4E5" />

      <ellipse
        cx="75"
        cy="50"
        rx="10"
        ry="24"
        fill="#FFD4E5"
        transform="rotate(90 75 50)"
      />

      <ellipse cx="50" cy="75" rx="10" ry="24" fill="#FFD4E5" />

      <ellipse
        cx="25"
        cy="50"
        rx="10"
        ry="24"
        fill="#FFD4E5"
        transform="rotate(90 25 50)"
      />

      <circle cx="50" cy="50" r="10" fill="#FFD84D" />
    </svg>
  );
}
