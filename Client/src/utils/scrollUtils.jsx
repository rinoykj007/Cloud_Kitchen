import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a horizontal scroll animation using GSAP and ScrollTrigger
 *
 * @param {Object} params - The parameters for the scroll animation
 * @param {React.RefObject} params.containerRef - Reference to the container element
 * @param {React.RefObject} params.scrollRef - Reference to the scrollable content element
 * @param {string} params.triggerId - Unique ID for the ScrollTrigger instance
 * @param {Array} params.dependencies - Array of dependencies to watch for changes (like data array)
 * @param {number} params.extraOffset - Optional negative offset to reduce empty space (default: 0)
 * @param {number} params.endThreshold - Optional threshold for end correction (default: 0.05)
 * @param {number} params.endCorrection - Optional correction value for end position (default: 0)
 * @param {Function} params.cleanup - Optional cleanup function to run on unmount
 * @returns {Function} Cleanup function to be used in useEffect
 */
export const useHorizontalScroll = ({
  containerRef,
  scrollRef,
  triggerId,
  dependencies = [],
  extraOffset = 0,
  endThreshold = 0.05,
  endCorrection = 0,
}) => {
  // Use a unique ID for this ScrollTrigger instance
  const scrollTriggerId = triggerId;

  // Kill only this specific ScrollTrigger instance if it exists
  const existingTrigger = ScrollTrigger.getById(scrollTriggerId);
  if (existingTrigger) {
    existingTrigger.kill();
  }

  const container = containerRef.current;
  const scrollContainer = scrollRef.current;

  if (!container || !scrollContainer) return () => {};

  // Force horizontal scroll with direct GSAP animation
  const totalWidth = scrollContainer.scrollWidth;
  const visibleWidth = container.offsetWidth;

  // Only create scroll animation if content is wider than container
  if (totalWidth <= visibleWidth) return () => {};

  // Calculate scroll distance
  // If extraOffset is provided, use it to reduce empty space
  const scrollDistance = totalWidth - visibleWidth - extraOffset;

  // Make sure scrollContainer is initially at position 0
  gsap.set(scrollContainer, { x: 0 });

  // Find the section container (parent of the container)
  const sectionContainer =
    container.closest(".feature-card-section") ||
    container.closest(".video-section");

  // Create the scroll animation with a unique ID
  const scrollTween = gsap.to(scrollContainer, {
    x: -scrollDistance,
    ease: "power2.inOut", // Even smoother easing with better acceleration/deceleration
    scrollTrigger: {
      id: scrollTriggerId, // Assign a unique ID to this ScrollTrigger
      trigger: sectionContainer || container, // Use the section container as trigger
      pin: true, // Pin the section during horizontal scroll
      pinSpacing: true, // Maintain the height during pinning
      start: "top top", // Start when the section reaches the top
      end: () => `+=${scrollDistance}`, // End after scrolling the full distance
      scrub: 1, // Smoother scrubbing
      markers: false, // Hide markers for production
      invalidateOnRefresh: true, // Recalculate on window resize
      anticipatePin: 1, // Improve pin performance
      onEnter: () => {
        // Ensure first card is visible when entering viewport
        gsap.set(scrollContainer, { x: 0 });
      },
      onLeaveBack: () => {
        // Reset position when scrolling back up
        gsap.set(scrollContainer, { x: 0 });
      },
      onUpdate: (self) => {
        // Ensure smooth progress at the start
        if (self.progress < 0.05) {
          gsap.set(scrollContainer, { x: 0 });
        }

        // Prevent scrolling beyond the last card and ensure it stops exactly at the end
        // Use the endThreshold parameter to determine when to apply the correction
        if (self.progress > endThreshold) {
          // Calculate exact position to ensure the last card is fully visible with no extra space
          // Use the endCorrection parameter to adjust the end position
          const exactEndPosition = -(totalWidth - visibleWidth + endCorrection);
          gsap.set(scrollContainer, { x: exactEndPosition });
        }
      },
    },
  });

  // Return cleanup function
  return () => {
    if (scrollTween.scrollTrigger) {
      scrollTween.scrollTrigger.kill();
    }
  };
};
