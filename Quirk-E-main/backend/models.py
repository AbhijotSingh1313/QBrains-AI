from pydantic import BaseModel, Field
from typing import List, Dict, Optional, Any

class CircuitGate(BaseModel):
    gate: str
    targets: List[int] = Field(default_factory=list)
    controls: Optional[List[int]] = Field(default_factory=list)
    column: int = 0

class CircuitContext(BaseModel):
    qubits: int = 0
    depth: int = 0
    operations: List[CircuitGate] = Field(default_factory=list)
    statevector_summary: Optional[str] = None
    probabilities: Optional[Dict[str, float]] = None
    selected_gate: Optional[Dict[str, Any]] = None

class ChatMessage(BaseModel):
    role: str # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    message: str
    circuit_context: Optional[CircuitContext] = None
    conversation_history: List[ChatMessage] = Field(default_factory=list)
    difficulty: str = "beginner" # "beginner", "intermediate", "advanced"
    quick_action: Optional[str] = None

class ChatResponse(BaseModel):
    reply: str
    sources: List[Dict[str, Any]] = Field(default_factory=list)
    circuit_summary: Optional[str] = None
    provider: str = "gemini"
    model: str = "gemini-2.5-flash"

class StatusResponse(BaseModel):
    status: str
    provider: str
    model: str
    rag_topics_count: int
    has_api_key: bool

# ============================================================================
# Learning Platform Dedicated Models (Isolated from Circuit Simulator)
# ============================================================================

class LearningLessonContext(BaseModel):
    course_id: Optional[str] = None
    module_id: Optional[str] = None
    lesson_id: Optional[str] = None
    lesson_title: Optional[str] = None
    difficulty: Optional[str] = "beginner" # "beginner", "intermediate", "advanced", "expert"
    objectives: Optional[List[str]] = Field(default_factory=list)
    key_equations: Optional[List[str]] = Field(default_factory=list)
    weak_topics: Optional[List[str]] = Field(default_factory=list)
    completed_lessons: Optional[List[str]] = Field(default_factory=list)
    language: Optional[str] = "en"

class LearningChatRequest(BaseModel):
    message: str
    lesson_context: Optional[LearningLessonContext] = None
    conversation_history: List[ChatMessage] = Field(default_factory=list)
    difficulty: str = "beginner"
    quick_action: Optional[str] = None # "explain_simply", "explain_math", "example", "hint", "quiz_me", "test_understanding", "why_important", "go_deeper"
    language: Optional[str] = "en"

class LearningStatusResponse(BaseModel):
    status: str
    service: str = "Learning Platform AI Quantum Tutor"
    provider: str
    model: str
    curriculum_levels: int = 11
    has_api_key: bool

