

const Clients = () => {  // Renamed for clarity
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">  
            <div className="container mx-auto px-4 sm:px-8 lg:px-16"> 
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Choose the Best Engagement Model for Your Needs
                    </h2> 
                    <p className="text-base sm:text-lg mt-4 text-gray-600">
                        Tailored to your business specifications and project requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"> 
                    {/* Engagement Model 1 */}
                    <div className="bg-orange-600 rounded-lg p-6 md:p-8 shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            Dedicated Hiring
                        </h3>
                        <p className="text-sm sm:text-base text-white">
                            Build your own team by selecting, hiring, and managing highly skilled software developers and IT experts on a long-term basis. This model ensures agile software development with resources that have the right expertise and cultural fit for your company.
                        </p>
                    </div>

                    {/* Engagement Model 2 */}
                    <div className="bg-orange-600 rounded-lg p-6 md:p-8 shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            Fixed Cost
                        </h3>
                        <p className="text-sm sm:text-base text-white">
                            Our project-based model, typically at a fixed price, provides you with top-tier software development experts. This model ensures swift and reliable collaboration between your team and our IT specialists dedicated to your specific project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
