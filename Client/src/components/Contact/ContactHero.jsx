
import girl from "../../assets/girl.jpg";
import women from "../../assets/women.jpg";
import menteam from "../../assets/menteam.jpg";

const ImagesList = [
    {
        image: girl,
        alt: "Girl image"
    },
    {
        image: menteam,
        alt: "Men team image"
    },
    {
        image: women,
        alt: "Women image"
    }
];

function ContactHero() {
    return (
        <div className="w-full bg-black py-12 px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-4xl font-medium text-white mb-4 mt-20">
                    We've Got an Entire Team Dedicated
                </span>
                <span className="text-2xl md:text-4xl font-medium text-white mb-4">
                    to Supporting You & Your Business
                </span>
                <p className="text-base md:text-lg text-white mb-8">
                    Get help 24/7, with our support team experts TODAY.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {ImagesList.map((imageData, index) => (
                        <img
                            key={index}
                            src={imageData.image}
                            alt={imageData.alt}
                            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
