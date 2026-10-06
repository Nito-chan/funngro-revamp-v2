/**
 * Renders a JSON-LD block.
 *
 * `<` is escaped to its unicode form so a stray `<` inside any string cannot
 * break out of the script tag. Native `<script>` rather than `next/script`
 * because structured data is data, not executable code.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
