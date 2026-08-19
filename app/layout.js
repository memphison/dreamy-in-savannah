export const metadata = {
  title: "Dreamy in Savannah",
  description: "A dreamy stay in Savannah, Georgia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
