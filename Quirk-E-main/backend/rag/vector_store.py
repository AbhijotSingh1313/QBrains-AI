import re
import math
from typing import List, Dict, Any, Tuple
import numpy as np

class VectorStore:
    """
    Lightweight, modular vector store with TF-IDF cosine similarity search.
    Provides fast, deterministic local retrieval without external vector DB dependencies,
    while maintaining clean interfaces for future embedding model plug-ins.
    """

    def __init__(self):
        self.chunks: List[Dict[str, Any]] = []
        self.vocabulary: Dict[str, int] = {}
        self.idf: np.ndarray = np.array([])
        self.doc_vectors: np.ndarray = np.array([])

    def _tokenize(self, text: str) -> List[str]:
        cleaned = re.sub(r'[^\w\s\+\-\|\>\<\\]', ' ', text.lower())
        tokens = [t.strip() for t in cleaned.split() if len(t.strip()) > 1]
        return tokens

    def add_documents(self, chunks: List[Dict[str, Any]]):
        self.chunks = chunks
        if not chunks:
            return

        # Build vocabulary
        doc_tokens_list = []
        vocab_set = set()

        for chunk in chunks:
            combined_text = f"{chunk.get('title', '')} {chunk.get('section', '')} {chunk.get('content', '')}"
            tokens = self._tokenize(combined_text)
            doc_tokens_list.append(tokens)
            vocab_set.update(tokens)

        self.vocabulary = {term: idx for idx, term in enumerate(sorted(vocab_set))}
        vocab_size = len(self.vocabulary)
        num_docs = len(chunks)

        if vocab_size == 0 or num_docs == 0:
            return

        # Calculate Document Frequencies (DF)
        df = np.zeros(vocab_size)
        for tokens in doc_tokens_list:
            unique_tokens = set(tokens)
            for token in unique_tokens:
                if token in self.vocabulary:
                    df[self.vocabulary[token]] += 1

        # Smooth Inverse Document Frequency (IDF)
        self.idf = np.log((num_docs + 1) / (df + 1)) + 1.0

        # Construct Document Vectors
        vectors = np.zeros((num_docs, vocab_size))
        for i, tokens in enumerate(doc_tokens_list):
            for token in tokens:
                if token in self.vocabulary:
                    idx = self.vocabulary[token]
                    vectors[i, idx] += 1

            # TF-IDF weighting and L2 normalization
            vectors[i] = vectors[i] * self.idf
            norm = np.linalg.norm(vectors[i])
            if norm > 0:
                vectors[i] = vectors[i] / norm

        self.doc_vectors = vectors

    def search(self, query: str, top_k: int = 3) -> List[Tuple[Dict[str, Any], float]]:
        if not self.chunks or len(self.vocabulary) == 0:
            return []

        query_tokens = self._tokenize(query)
        if not query_tokens:
            return []

        # Vectorize query
        q_vec = np.zeros(len(self.vocabulary))
        for token in query_tokens:
            if token in self.vocabulary:
                q_vec[self.vocabulary[token]] += 1

        q_vec = q_vec * self.idf
        q_norm = np.linalg.norm(q_vec)
        if q_norm == 0:
            return []
        q_vec = q_vec / q_norm

        # Cosine similarity
        scores = np.dot(self.doc_vectors, q_vec)
        top_indices = np.argsort(scores)[::-1][:top_k]

        results = []
        for idx in top_indices:
            score = float(scores[idx])
            if score > 0.05:
                results.append((self.chunks[idx], score))

        return results
