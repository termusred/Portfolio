import Avatar from "@/app/media/photo_5345981704009023866_y.jpg"
export default function HeroSection() {
    return(
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="half w-1/3 gap-4 flex flex-col">
                <span className="text-4xl">Termusred</span>
                <p>Intro text : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat accusamus est, beatae atque consequuntur tenetur, in voluptatem inventore facere error recusandae architecto velit nostrum sed expedita natus. Dolorum, voluptatum atque.</p>
            </div>
            <div className="half w-1/3">
                <img src={Avatar} alt="da" />
            </div>
        </div>
    )
}