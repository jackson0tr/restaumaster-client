import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async'

const TermsPage = () => {

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab: any) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Helmet>
        <title>Terms of Service RestauMaster</title>
        <meta
          name="description"
          content="Welcome to RestauMaster Food Ordering Website. Let's know about RestauMaster Click for more..."
        />
        <link rel="canonical" href="https://restaumaster.vercel.app/terms" />
      </Helmet>
      <div className={`w-11/12 mx-auto my-8`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service RestauMaster</h2>
        <div className="mx-auto space-y-4">

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(2)}
            >
              <span className="text-lg font-medium text-gray-900">
                1. Acceptance of Terms
              </span>
              {activeTab === 2 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 2 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  By accessing or using RestauMaster, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using or accessing this site.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(3)}
            >
              <span className="text-lg font-medium text-gray-900">
                2. Eligibility
              </span>
              {activeTab === 3 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 3 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  You must be at least 18 years old to use our services. By using RestauMaster, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding contract.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(4)}
            >
              <span className="text-lg font-medium text-gray-900">
                3. Account Registration
              </span>
              {activeTab === 4 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 4 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  To place an order through RestauMaster, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information during registration and to update such information to keep it accurate and current. You are responsible for safeguarding your account credentials and for any activity that occurs under your account.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(5)}
            >
              <span className="text-lg font-medium text-gray-900">
                4. Orders and Payments
              </span>
              {activeTab === 5 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 5 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  When you place an order through RestauMaster, you agree to pay all charges associated with your order, including taxes, delivery fees, and any other applicable charges. All payments must be made through the payment methods provided on our platform. Prices and availability of menu items are subject to change without notice.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(6)}
            >
              <span className="text-lg font-medium text-gray-900">
                5. Delivery and Pickup
              </span>
              {activeTab === 6 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 6 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  RestauMaster partners with restaurants and third-party delivery services to fulfill your orders. Estimated delivery times are provided for convenience and are not guaranteed. RestauMaster is not responsible for delays or issues that arise during the delivery process. If you choose to pick up your order, you agree to do so within the time frame provided by the restaurant.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(7)}
            >
              <span className="text-lg font-medium text-gray-900">
                6. Refunds and Cancellations
              </span>
              {activeTab === 7 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 7 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Refunds and cancellations are subject to the policies of the respective restaurants. If you need to cancel an order, please contact the restaurant directly as soon as possible. RestauMaster does not guarantee refunds or cancellations once an order has been placed.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(8)}
            >
              <span className="text-lg font-medium text-gray-900">
                7. Restaurant Listings
              </span>
              {activeTab === 8 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 8 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  RestauMaster provides restaurant listings, including menus, prices, and other related information. While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy of such information. Restaurants may change their offerings without notice, and it is your responsibility to verify details before placing an order.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(9)}
            >
              <span className="text-lg font-medium text-gray-900">
                8. User Conduct
              </span>
              {activeTab === 9 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 9 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  You agree not to use RestauMaster for any unlawful or prohibited activities, including but not limited to:
                  <br />
                  Engaging in fraudulent activities or providing false information.
                  Interfering with the operation of RestauMaster or its services.
                  Attempting to gain unauthorized access to other users' accounts or personal information.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(10)}
            >
              <span className="text-lg font-medium text-gray-900">
                9. Intellectual Property
              </span>
              {activeTab === 10 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 10 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  All content on RestauMaster, including but not limited to text, graphics, logos, and software, is the property of RestauMaster or its licensors and is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal, non-commercial purposes.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(11)}
            >
              <span className="text-lg font-medium text-gray-900">
                10. Limitation of Liability
              </span>
              {activeTab === 11 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 11 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  RestauMaster provides its services on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted or error-free. To the fullest extent permitted by law, RestauMaster and its affiliates, partners, and employees shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our services.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(13)}
            >
              <span className="text-lg font-medium text-gray-900">
                12. Changes to Terms
              </span>
              {activeTab === 13 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 13 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  RestauMaster reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of RestauMaster after such changes constitutes your acceptance of the new Terms.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(14)}
            >
              <span className="text-lg font-medium text-gray-900">
                13. Governing Law
              </span>
              {activeTab === 14 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 14 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or your use of RestauMaster shall be resolved exclusively in the courts of [Your Country/State].
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(15)}
            >
              <span className="text-lg font-medium text-gray-900">
                14. Contact Information
              </span>
              {activeTab === 15 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 15 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  If you have any questions or concerns about these Terms, please contact us at [Insert Contact Email].
                  By using RestauMaster, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            )}
          </div>



        </div>
      </div>
    </>
  );
};


export default TermsPage;