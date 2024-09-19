import { useEffect, useState } from "react";

const DEBUG_MODE = false;

const LoadingBarAnimation = () => {
  const messages = [
    "Loading, please wait...",
    "Almost there...",
    "Fetching the data...",
    "Eating cheese...",
    "Hang tight...",
    "Preparing your experience...",
    "No Cheese Gromit...",
    "Luke, I am your father!",
    "Baking ice cream...",
    "You are number 2843684714 in the queue",
    "TODO: Insert elevator music",
    "How about this weather, eh?",
    "@todo Insert witty loading message",
    "Java developers never RIP. They just get Garbage Collected.",
    "Space is invisible mind dust, and stars are but wishes.",
    "May the forks be with you",
    "Convincing AI not to turn evil..",
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState(messages[0]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (!hasVisited || DEBUG_MODE) {
      // Start loading with a delay
      setIsLoading(true);

      // Function to handle the user's click to cancel the animation
      const handleClick = () => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("visited", "true");
        }, 1000); // Match this to the transition duration
      };

      // Add click event listener to cancel the animation
      document.addEventListener("click", handleClick);

      // Set timeouts to handle the fade-out after the loading is complete
      const initialDelay = 2000; // 2 seconds initial delay
      const animationDuration = 5000; // Duration of the animation
      const holdDuration = 1000; // 1 second hold after loading is complete

      setTimeout(() => {
        if (!isFadingOut) {
          // Only start fading out if the user has not clicked
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem("visited", "true");
          }, 1000); // Match this to the transition duration
        }
      }, initialDelay + animationDuration + holdDuration); // Wait for initial delay + animation + 1 second hold

      const cycleMessages = () => {
        const intervalId = setInterval(() => {
          const getRandomIndex = () =>
            Math.floor(Math.random() * messages.length);
          setTooltipMessage(messages[getRandomIndex()]);
        }, 1000); // Change message every second

        return () => clearInterval(intervalId);
      };

      // Start cycling through messages
      const cleanup = cycleMessages();

      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClick);
        cleanup();
      };
    }
  }, [isFadingOut]);

  return (
    isLoading && (
      <div className={`loadingBarContainer ${isFadingOut ? "fadeOut" : ""}`}>
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <h1 className="mb-8 text-4xl lg:text-6xl font-bold text-secondary">
            Felix Hu
          </h1>
          <div className="loadingContainer mb-2">
            <div className="loadingBar" />
          </div>
          <span className="loadingTooltip px-4 min-h-12">{tooltipMessage}</span>

          <div className="disclaimerLoading text-xs text-secondary">
            You can skip this animation by clicking anywhere on the screen.
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingBarAnimation;
