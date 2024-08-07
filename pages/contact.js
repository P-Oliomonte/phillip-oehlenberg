import { useEffect } from "react";

export default function Contact({ onPageChange }) {
  useEffect(() => {
    onPageChange("contact");
  });

  return (
    <main>
      <p>Contact Test</p>
    </main>
  );
}
