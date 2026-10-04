const MIN_LENGTH = 180;
const MAX_LENGTH = 320;

/** Turns one markdown block into plain text, or '' if it isn't prose. */
function toPlainText(block: string): string {
  const trimmed = block.trim();
  if (/^(#|```|\{%|<|[-*_=]{3,}$|!\[|\s*[-*+] |\d+\. )/.test(trimmed)) return '';
  // Setext headings: a line of text underlined with === or ---.
  if (/\n[=-]{3,}\s*$/.test(trimmed)) return '';

  return (
    trimmed
      .replace(/^>\s?/gm, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[*`~]+/g, '')
      // Underscore emphasis only at word edges, so names like node_modules survive.
      .replace(/(?<!\w)_+|_+(?!\w)/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/** First few sentences of a markdown article, ending on a sentence where possible. */
export function excerpt(markdown: string): string {
  let text = '';
  for (const block of markdown.split(/\n\s*\n/)) {
    const plain = toPlainText(block);
    if (!plain) continue;
    text = text ? `${text} ${plain}` : plain;
    if (text.length >= MIN_LENGTH) break;
  }

  if (text.length <= MAX_LENGTH) return text;

  const clipped = text.slice(0, MAX_LENGTH);
  const sentenceEnd = Math.max(clipped.lastIndexOf('. '), clipped.lastIndexOf('! '), clipped.lastIndexOf('? '));
  if (sentenceEnd >= MIN_LENGTH) return clipped.slice(0, sentenceEnd + 1);
  return `${clipped.slice(0, clipped.lastIndexOf(' '))}…`;
}
