import { useEffect } from "react";
import { Helmet } from 'react-helmet-async'

const PrivacyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <>
        <Helmet>
            <title>Privacy Policy RestauMaster</title>
            <meta
            name="description"
            content="Welcome to RestauMaster food ordering Website. Let's know about RestauMaster Click for more..."
            />
            <link rel="canonical" href="https://restaumaster.vercel.app/privacy" />
        </Helmet>
        <div className={`w-11/12 mx-auto my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy RestauMaster</h2>
            <div className="mx-auto space-y-4">
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    RestauMaster is a premier online platform dedicated to providing seamless and efficient food ordering experiences, connecting customers with their favorite local restaurants.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    At RestauMaster, we pride ourselves on delivering a user-friendly interface that makes browsing menus and placing orders both quick and easy.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Our mission at RestauMaster is to enhance the convenience of dining by offering a wide selection of cuisines from trusted eateries, all accessible through our comprehensive website.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    RestauMaster is committed to supporting local businesses by providing them with the tools and exposure needed to reach a broader customer base.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    We at RestauMaster strive to offer an unparalleled level of customer service, ensuring that every order is handled with care and delivered promptly.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    RestauMaster’s innovative platform allows customers to explore new culinary experiences by offering exclusive deals and personalized recommendations
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    With RestauMaster, you can effortlessly track your orders, receive real-time updates, and enjoy a reliable delivery service that brings your meals right to your doorstep.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    RestauMaster’s robust partnership network includes a diverse range of restaurants, ensuring that we cater to every palate and preference.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Our goal at RestauMaster is to transform the way you experience food delivery by providing a seamless, reliable, and enjoyable service from start to finish.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    RestauMaster leverages cutting-edge technology to ensure that every transaction is secure, every order is accurate, and every customer is satisfied.
                    </span>
                </div>
            </div>
        </div>
        </>
    );
};



export default PrivacyPage;