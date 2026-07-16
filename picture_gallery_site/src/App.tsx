import { useEffect, useState } from "react";
import { ParallaxScrollSecond } from "./components/UX/parallax-scroll-2";

export default function App() {

    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadImages() {
            try {
                const response = await fetch("http://localhost:8000/pictures");

                if (!response.ok)
                    throw new Error("Failed to fetch");

                const data = await response.json();
                const imageUrls = data.map((image: any) => image.url);

                console.log("Images received:", imageUrls);
                setImages(imageUrls);

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadImages();
    }, []);

    if (loading) {
        return (
            <div className="text-white flex justify-center items-center h-screen bg-white">
                Loading...
            </div>
        );
    }

    return (
        <div style={{backgroundColor: "black"}} id={"overlay"} className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <ParallaxScrollSecond
                    images={images}
                    className="h-[900px] w-full"
                />
            </div>
        </div>
    );
}
