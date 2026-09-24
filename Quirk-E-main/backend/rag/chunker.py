import re
from typing import List, Dict, Any

class DocumentChunker:
    """Splits markdown documents into semantically coherent chunks based on section headers."""

    @staticmethod
    def chunk_markdown(content: str, doc_name: str, category: str) -> List[Dict[str, Any]]:
        chunks: List[Dict[str, Any]] = []
        lines = content.split('\n')
        current_title = doc_name
        current_header = "Overview"
        current_lines: List[str] = []

        for line in lines:
            if line.startswith('# '):
                # Main document title
                current_title = line[2:].strip()
            elif line.startswith('## '):
                # New section
                if current_lines:
                    text = '\n'.join(current_lines).strip()
                    if len(text) > 30:
                        chunks.append({
                            "title": current_title,
                            "section": current_header,
                            "content": text,
                            "category": category,
                            "source": f"{category}/{doc_name}"
                        })
                    current_lines = []
                current_header = line[3:].strip()
            else:
                current_lines.append(line)

        if current_lines:
            text = '\n'.join(current_lines).strip()
            if len(text) > 30:
                chunks.append({
                    "title": current_title,
                    "section": current_header,
                    "content": text,
                    "category": category,
                    "source": f"{category}/{doc_name}"
                })

        return chunks
