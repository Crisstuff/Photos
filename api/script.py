from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from urllib.parse import quote

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:9090",
        "http://192.168.1.69:9090",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Picture API is running"
    }



file_path = Path("../pictures")
image_format = {".jpg",".jpeg",".png",".gif",".bmp",".webp"}



@app.get("/pictures")
def pictures(request: Request):

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Picture folder not found"
        )


    images = []

    for file in file_path.iterdir():
        if (file.is_file() and file.suffix.lower() in image_format):

            images.append({
                "filename": file.name,
                "url": (str(request.base_url) + f"download/{quote(file.name)}")
            })

    return images


@app.get("/download/{filename}")
def download(filename: str):

    file = file_path / filename

    if not file.exists():
        raise HTTPException(
            status_code=404,
            detail="Image not found"
        )

    return FileResponse(file)