# PictureGallery
Photos i want to share & use elsewhere.
### How to run locally:
#### frontend
1. Navigate into the `cd PictureGallery/picture_gallery_site`.
2. In **PictureGallery/picture_gallery_site** run `npm install`.
3. Then run `npm run dev` to run the application.

#### backend
1. Navigate into the `cd PictureGallery/api`.
2. In **PictureGallery/api** run `python -m venv .venv`.
3. Than run `source .venv/bin/activate` to activate the virtual environment.
4. Than run `pip install -r requirements.txt` to download all requirements.
5. Than run `uvicorn script:app --reload` to run the application.

**Note:** To stop using the virtual environment type `deactivate`.

### api:
A Rest api endpoint that gets the name/file_path of all the pictures in the `PictureGallery/pictures` and sends them from a api call. **GOAL:** create an api endpoint that i can use to get pictures in other applications.  

### picture_gallery_site:
A frontend website that calls on the api and displays all the pictures that are in `PictureGallery/pictures`. 

### pictures:
A folder that contains pictures that i want to share and use in other applications.
