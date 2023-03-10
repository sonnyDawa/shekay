import React from 'react';

const HomeTeam = () => {
    return (
        <div>
            <div class="py-20 bg-white">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Meet Our team</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">A group of computer prodigies who are working to make your job search experience pleasant and convenient. Our team is always ready to assist you with any of your needs.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 class="text-2xl">Hentoni Doe</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">Jonathan Doe</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">Anabelle Doe</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default HomeTeam;
