
import heroImg from '../../assets/hero.svg';

function PersonImage() {
    return (
        <div className="basis-full sm:basis-1/2 md:basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
                <img src={heroImg} alt="" className="max-w-full h-auto md:max-w-none" />
            </figure>
        </div>
    );
}

export default PersonImage;
