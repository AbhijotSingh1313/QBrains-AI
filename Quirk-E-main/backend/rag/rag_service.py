import os
from pathlib import Path
from typing import List, Dict, Any
from .chunker import DocumentChunker
from .vector_store import VectorStore

class RAGService:
    def __init__(self, documents_dir: str = None):
        if documents_dir is None:
            documents_dir = str(Path(__file__).parent / "documents")
        self.documents_dir = Path(documents_dir)
        self.vector_store = VectorStore()
        self.indexed_topics: List[str] = []
        self._load_and_index()

    def _load_and_index(self):
        chunks: List[Dict[str, Any]] = []
        topics_set = set()

        if not self.documents_dir.exists():
            return

        for category_path in self.documents_dir.iterdir():
            if category_path.is_dir():
                category = category_path.name
                for doc_path in category_path.glob("*.md"):
                    try:
                        content = doc_path.read_text(encoding="utf-8")
                        doc_chunks = DocumentChunker.chunk_markdown(content, doc_path.stem, category)
                        chunks.extend(doc_chunks)
                        for c in doc_chunks:
                            topics_set.add(f"{c['category']}: {c['title']} - {c['section']}")
                    except Exception as e:
                        print(f"Error loading {doc_path}: {e}")

        self.vector_store.add_documents(chunks)
        self.indexed_topics = sorted(list(topics_set))
        print(f"RAG Service initialized: Indexed {len(chunks)} knowledge chunks across {len(self.indexed_topics)} topics.")

    def retrieve(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        results = self.vector_store.search(query, top_k=top_k)
        retrieved_chunks = []
        for chunk, score in results:
            item = dict(chunk)
            item["score"] = round(score, 3)
            retrieved_chunks.append(item)
        return retrieved_chunks

    def format_grounding_context(self, retrieved_chunks: List[Dict[str, Any]]) -> str:
        if not retrieved_chunks:
            return "No specific documents retrieved from knowledge base."

        context_blocks = []
        for i, chunk in enumerate(retrieved_chunks, 1):
            block = (
                f"[Source {i}: {chunk.get('title')} > {chunk.get('section')} ({chunk.get('category')})]\n"
                f"{chunk.get('content')}"
            )
            context_blocks.append(block)

        return "\n\n---\n\n".join(context_blocks)
