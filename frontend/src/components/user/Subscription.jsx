import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateSubscription } from "../../services/subscriptionService";
import Swal from "sweetalert2";

const Subscription = () => {
  const { user, setUser } = useContext(AuthContext);
  const [currentPlan, setCurrentPlan] = useState("Basic");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(null);

  useEffect(() => {
    if (user?.subscription_plan) {
      setCurrentPlan(user.subscription_plan);
    }
  }, [user]);

  const plans = [
    {
      name: "Basic",
      price: "₱0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Basic search functionality",
        "Simple itineraries",
        "Limited travel guides",
        "Last 3 trips history",
        "1 calendar integration",
      ],
    },
    {
      name: "Pro",
      price: "₱250",
      period: "/month",
      description: "For frequent travelers",
      features: [
        "AI recommendations",
        "Booking & cloud storage",
        "Multi-calendar sync",
        "Offline access",
        "Priority support",
      ],
    },
    {
      name: "Premium",
      price: "₱499",
      period: "/month",
      description: "Complete travel solution",
      features: [
        "All Pro features included",
        "24/7 concierge service",
        "Group travel (up to 10)",
        "Integrated travel insurance",
        "Premium priority support",
      ],
    },
  ];

  const handleUpgrade = async (planName) => {
    const userId = user?.id || user?._id;
    if (!userId) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to upgrade your subscription.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    if (planName === currentPlan) {
      Swal.fire({
        title: "Already Subscribed",
        text: `You are already on the ${planName} plan.`,
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    // Check if downgrading
    const planOrder = { Basic: 1, Pro: 2, Premium: 3 };
    const isDowngrade = planOrder[planName] < planOrder[currentPlan];

    const result = await Swal.fire({
      title: isDowngrade ? "Downgrade Subscription?" : "Upgrade Subscription?",
      html: isDowngrade
        ? `Are you sure you want to downgrade from ${currentPlan} to ${planName}?<br/><br/>You will lose access to premium features.`
        : `Upgrade to ${planName} plan for ${plans.find((p) => p.name === planName)?.price}/month?<br/><br/>You'll get access to all ${planName} features.`,
      icon: isDowngrade ? "warning" : "question",
      showCancelButton: true,
      confirmButtonText: isDowngrade ? "Yes, Downgrade" : "Yes, Upgrade",
      cancelButtonText: "Cancel",
      confirmButtonColor: isDowngrade ? "#ef4444" : "#06b6d4",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      try {
        setIsLoading(true);
        setLoadingPlan(planName);

        console.log("Calling updateSubscription with:", { userId, planName });
        const updatedUser = await updateSubscription(userId, planName);
        console.log("Updated user received:", updatedUser);

        // Update user context with the updated user data from backend
        const normalizedUser = {
          ...user,
          ...updatedUser,
          id: updatedUser.id || updatedUser._id?.toString() || userId,
          subscription_plan: planName,
          subscription_status: "Active",
        };
        
        console.log("Updating user context with:", normalizedUser);
        setUser(normalizedUser);
        setCurrentPlan(planName);

        await Swal.fire({
          title: "Success!",
          text: `Your subscription has been ${isDowngrade ? "downgraded" : "upgraded"} to ${planName}.`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#06b6d4",
        });
      } catch (error) {
        console.error("Subscription update error:", error);
        const errorMessage = error.response?.data?.error || error.message || "Failed to update subscription. Please try again.";
        console.error("Error message:", errorMessage);
        await Swal.fire({
          title: "Error",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#ef4444",
        });
      } finally {
        setIsLoading(false);
        setLoadingPlan(null);
      }
    }
  };

  const handleContactSupport = () => {
    Swal.fire({
      title: "Contact Support",
      html: "Our support team is here to help!<br/><br/>Email: support@navigo.com<br/>Phone: +1 (555) 123-4567<br/><br/>Available 24/7",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#06b6d4",
    });
  };

  const handleCompareFeatures = () => {
    const comparison = `
      <div style="text-align: left;">
        <h3 style="margin-bottom: 15px;">Feature Comparison</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <th style="padding: 8px; text-align: left;">Feature</th>
            <th style="padding: 8px; text-align: center;">Basic</th>
            <th style="padding: 8px; text-align: center;">Pro</th>
            <th style="padding: 8px; text-align: center;">Premium</th>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">AI Recommendations</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">✅</td>
            <td style="padding: 8px; text-align: center;">✅</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">Cloud Storage</td>
            <td style="padding: 8px; text-align: center;">Limited</td>
            <td style="padding: 8px; text-align: center;">✅</td>
            <td style="padding: 8px; text-align: center;">✅</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">24/7 Concierge</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">✅</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">Group Travel</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">Up to 10</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Priority Support</td>
            <td style="padding: 8px; text-align: center;">❌</td>
            <td style="padding: 8px; text-align: center;">✅</td>
            <td style="padding: 8px; text-align: center;">Premium</td>
          </tr>
        </table>
      </div>
    `;

    Swal.fire({
      title: "Feature Comparison",
      html: comparison,
      width: "600px",
      confirmButtonText: "Close",
      confirmButtonColor: "#06b6d4",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <span className="font-medium">Manage Your Plan</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Subscription Plans</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your travel needs. All plans include
            secure cloud storage and mobile sync.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {plans.map((plan, index) => {
            const isCurrentPlan = plan.name === currentPlan;
            const isUpgrade = ["Pro", "Premium"].includes(plan.name) && !isCurrentPlan;
            const isDowngrade = plan.name === "Basic" && currentPlan !== "Basic";
            
            return (
              <div
                key={index}
                className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative"
              >
                {isCurrentPlan && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    Current Plan
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-blue-500">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  onClick={() => handleUpgrade(plan.name)}
                  disabled={isCurrentPlan || isLoading}
                  className={`w-full py-3 rounded-lg font-medium transition-colors min-h-[44px] flex items-center justify-center ${
                    isCurrentPlan
                      ? "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                      : isLoading && loadingPlan === plan.name
                      ? "bg-blue-400 text-white cursor-wait"
                      : isDowngrade
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {isLoading && loadingPlan === plan.name ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isCurrentPlan ? (
                    "Current Plan"
                  ) : isDowngrade ? (
                    "Downgrade to Basic"
                  ) : (
                    `Upgrade to ${plan.name}`
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-center mb-4">
            Need help choosing?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the perfect plan. All plans
            include a 30-day money-back guarantee.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">30</div>
              <div className="text-gray-600 dark:text-gray-400">Day trial</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleContactSupport}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors min-h-[44px]"
            >
              Contact Support
            </button>
            <button
              onClick={handleCompareFeatures}
              className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-h-[44px]"
            >
              Compare Features
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
