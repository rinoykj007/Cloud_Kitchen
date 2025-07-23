import React, { useEffect, useRef } from "react";
import "../../styles/horizontalScroll.css"; // Import your custom styles
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Video card data
const videoCardData = [
  {
    id: 1,
    title: "Mix, Match & Munch",
    description:
      "Tailor your journey by adjusting daily calories and exploring a variety of daily meal options. Our app offers the flexibility you need to create your ideal culinary experience.",
    emoji: "🥗",
    videoSrc:
      "https://api-blog.calo.app/wp-content/uploads/2023/10/section-02-animation-01-720p-1.mp4",
  },
  {
    id: 2,
    title: "Be the Chef",
    description:
      "Play chef and create your ideal meal from scratch, tailoring flavors to your liking and crafting a plate that's uniquely you.",
    emoji: "🥘",
    videoSrc: "https://api-blog.calo.app/wp-content/uploads/2023/12/xf2wgi.mp4",
  },
  {
    id: 3,
    title: "Flexibility",
    description:
      "Life's full of surprises, and we get it. Our flexible options let you pause or skip as needed, adapting your meal plan. Plus, enjoy the ease of free delivery for a smoother wellness journey.",
    emoji: "⏸️",
    videoSrc:
      "https://api-blog.calo.app/wp-content/uploads/2023/12/CALO20all20day.mp4",
  },
  {
    id: 4,
    title: "Always here for you",
    description:
      "Need assistance, or just have notes and suggestions? We are here for you 24/7 via live chat. Our dedicated team is here to ensure your experience is seamless and satisfying.",
    emoji: "🤗",
    videoSrc:
      "https://api-blog.calo.app/wp-content/uploads/2024/01/Mo-Video-Correct-2-1-1-1.mp4",
  },
];

// Individual video card component
const VideoCardItem = ({ title, description, emoji, videoSrc }) => {
  // Define a unique gradient based on the emoji
  const getGradient = (emoji) => {
    const gradients = {
      "🥗": "linear-gradient(135deg, #43a047 0%, #1b5e20 100%)",
      "🥘": "linear-gradient(135deg, #ff7043 0%, #d84315 100%)",
      "⏸️": "linear-gradient(135deg, #5c6bc0 0%, #303f9f 100%)",
      "🤗": "linear-gradient(135deg, #26a69a 0%, #00796b 100%)",
      default: "linear-gradient(135deg, #9575cd 0%, #673ab7 100%)",
    };
    return gradients[emoji] || gradients.default;
  };

  return (
    <div className="card-container" style={{ perspective: "1000px" }}>
      <div
        className="video-card"
        style={{
          width: "800px",
          height: "320px",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow:
            "0 15px 30px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06)",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ffffff",
          border: "1px solid rgba(240, 240, 240, 0.8)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          position: "relative",
          transformStyle: "preserve-3d",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.16), 0 10px 20px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        {/* Accent color strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: getGradient(emoji),
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            zIndex: 2,
          }}
        />

        {/* Video section with proper aspect ratio and overlay */}
        <div
          style={{
            width: "380px",
            height: "320px",
            overflow: "hidden",
            position: "relative",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: "#000",
          }}
        >
          {/* Video overlay gradient */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 1,
            }}
          />

          <video
            className="video-element"
            src={videoSrc}
            loop
            muted
            playsInline
            autoPlay
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />

          {/* Emoji overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: "54px",
              zIndex: 2,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          >
            {emoji}
          </div>
        </div>

        {/* Text content section with better spacing and design */}
        <div
          style={{
            padding: "35px",
            display: "flex",
            flexDirection: "column",
            width: "420px",
            justifyContent: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Subtle pattern background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage:
                "radial-gradient(circle at 10px 10px, #f5f5f5 2%, transparent 0%)",
              backgroundSize: "20px 20px",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {/* Title with underline effect */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#222",
                margin: "0 0 5px 0",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                position: "relative",
                display: "inline-block",
              }}
            >
              {title}
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "40px",
                  height: "3px",
                  background: getGradient(emoji),
                  borderRadius: "2px",
                }}
              />
            </h3>
          </div>

          {/* Description with improved typography */}
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.7",
              margin: "0",
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              position: "relative",
              zIndex: 1,
              maxWidth: "380px",
            }}
          >
            {description}
          </p>

          {/* Learn more button */}
          <div style={{ marginTop: "10px", position: "relative", zIndex: 1 }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#9333ea",
                fontWeight: "600",
                fontSize: "15px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "6px" }}
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main VideoCard component
export default function VideoCard() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // Custom horizontal scroll implementation to fix the excessive scrolling issue
  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    // Register ScrollTrigger plugin (in case it's not registered elsewhere)
    gsap.registerPlugin(ScrollTrigger);

    // Kill any existing ScrollTrigger with this ID
    const scrollTriggerId = "video-card-scroll";
    const existingTrigger = ScrollTrigger.getById(scrollTriggerId);
    if (existingTrigger) {
      existingTrigger.kill();
    }

    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    // Calculate the exact width needed for scrolling
    const cardWidth = 800; // Width of each card in pixels
    const cardGap = 50; // Gap between cards in pixels
    const numCards = videoCardData.length;
    const sidePadding = 50; // Side padding on each side

    // Calculate total content width (all cards + gaps between them)
    const totalContentWidth = cardWidth * numCards + cardGap * (numCards - 1);

    // Get container width
    const containerWidth = container.offsetWidth;

    // Calculate the exact scroll distance needed
    // Add an extreme negative offset to completely eliminate all empty space
    const scrollDistance = Math.max(
      0,
      totalContentWidth - containerWidth - 600
    );

    // Only create scroll animation if content is wider than container
    if (scrollDistance <= 0) return;

    // Reset initial position
    gsap.set(scrollContainer, { x: 0 });

    // Find the section container
    const sectionContainer = container.closest(".video-section");

    // Create the scroll animation with precise end point
    const scrollTween = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "power2.inOut",
      scrollTrigger: {
        id: scrollTriggerId,
        trigger: sectionContainer || container,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: () => `+=${scrollDistance}`, // Exact distance needed
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: () => {
          gsap.set(scrollContainer, { x: 0 });
        },
        onLeaveBack: () => {
          gsap.set(scrollContainer, { x: 0 });
        },
        onUpdate: (self) => {
          // Ensure smooth progress at the start
          if (self.progress < 0.05) {
            gsap.set(scrollContainer, { x: 0 });
          }

          // Prevent scrolling beyond the last card and ensure it stops exactly at the end
          if (self.progress > 0.75) {
            // Calculate exact position to ensure the last card is fully visible with absolutely no extra space
            // Apply an extreme correction to completely eliminate any remaining space
            const exactEndPosition = -(
              totalContentWidth -
              containerWidth +
              500
            );
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
  }, [videoCardData]);

  return (
    <div
      className="video-section"
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0",
        backgroundColor: "#f9f9f9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background subtle pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #f0f0f0 2%, transparent 0%)",
          backgroundSize: "50px 50px",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Section heading with accent */}
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2
            className="text-4xl font-bold"
            style={{
              color: "#333",
              position: "relative",
              display: "inline-block",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Why Choose Our Diet Plans?
            <span
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                backgroundColor: "#9333ea",
                borderRadius: "2px",
              }}
            ></span>
          </h2>
        </div>

        {/* Scrolling container with improved styling */}
        <div
          ref={containerRef}
          className="feature-card-container"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <div
            className="horizontal-scroll-container"
            style={{ padding: "20px 0" }}
          >
            <div
              ref={scrollRef}
              className="horizontal-scroll-content"
              style={{
                gap: "50px",
                display: "flex",
                flexWrap: "nowrap",
                width: "fit-content",
                paddingLeft: "125rem",
                paddingRight: "20px", // Reduced right padding to minimize empty space
              }}
            >
              {videoCardData.map((card) => (
                <VideoCardItem
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  emoji={card.emoji}
                  videoSrc={card.videoSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
