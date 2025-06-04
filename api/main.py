from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import tempfile
from generate_critique import generate_critique  # adjust if needed

app = FastAPI()

# Allow React frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In dev, allow all. In prod, lock this down.
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/critique")
async def critique_image(file: UploadFile = File(...)):
    try:
        # Save uploaded image temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
            contents = await file.read()
            tmp.write(contents)
            tmp_path = tmp.name

        # Run your existing critique function
        critique = generate_critique(tmp_path)

        # Clean up
        os.remove(tmp_path)

        return {"critique": critique}
    except Exception as e:
        return {"error": str(e)}
