import React, { useEffect, useRef } from "react";
import { useHorizontalScroll } from "../../utils/scrollUtils"; // Custom hook for horizontal scrolling

// Card component to display individual cards
const Card = ({ title, content, image, color }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
          <div className="card-button-container">
            <button className="card-button">
              <span>🥗</span> {title}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample card data with diet plan information
const cardData = [
  {
    id: 1,
    title: "BUILD YOUR OWN MEAL",
    content: "Customize your meal with your favorite ingredients",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "PROTEIN PACKED",
    content: "High-protein meals to fuel your day",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "PLANT BASED",
    content: "Delicious vegetarian and vegan options",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "LOW CARB",
    content: "Keto-friendly meals with minimal carbs",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "MEAL PREP",
    content: "Ready-to-eat meals for busy schedules",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "CALORIE CONTROL",
    content: "Portion-controlled meals for weight management",
    color: "#2e8b57",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Main FeatureCard component with horizontal scrolling - using a simpler approach
const FeatureCard = ({ cards = cardData, style }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Use the shared horizontal scroll utility with modified parameters to fix empty space
    const cleanup = useHorizontalScroll({
      containerRef,
      scrollRef,
      triggerId: "feature-card-scroll",
      dependencies: [cards],
      // Add these extra parameters to fix the empty space issue
      extraOffset: 300, // Add a negative offset to reduce empty space
      endThreshold: 0.8, // Trigger end correction earlier
      endCorrection: 200, // Apply stronger correction at the end
    });

    // Clean up on component unmount
    return cleanup;
  }, [cards]);

  return (
    <div
      className="feature-card-section"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Keep the heading inside the container that has the scroll trigger */}
      <div
        ref={containerRef}
        className="feature-card-container"
        style={{ textAlign: "center" }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Diet Plans
        </h2>

        {/* Scrolling container */}
        <div className="horizontal-scroll-container">
          <div ref={scrollRef} className="horizontal-scroll-content">
            {cards.map((card) => (
              <div key={card.id} className="card-container">
                <Card
                  title={card.title}
                  content={card.content}
                  image={card.image}
                  color={card.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
