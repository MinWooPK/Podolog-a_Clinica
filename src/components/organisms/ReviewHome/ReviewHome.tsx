import { useEffect, useState } from "react";
import CardReview from "@molecules/CardReview";
import reviews from "@services/review.json";
import { useTranslation } from "react-i18next";

import {
  ReviewHomeContainer,
  ReviewsGrid,
  SubTitleReview,
  TitleReview,
} from "./ReviewHome.style";

function ReviewHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const visibleReviews = isMobile ? reviews.slice(0, 3) : reviews.slice(0, 6);

  return (
    <ReviewHomeContainer>
      <TitleReview>{t("reviews.title")}</TitleReview>
      <SubTitleReview>{t("reviews.subtitle")}</SubTitleReview>

      <ReviewsGrid>
        {visibleReviews.map((review, index) => (
          <CardReview
            key={index}
            name={review.name}
            description={review.description}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ReviewsGrid>
    </ReviewHomeContainer>
  );
}

export default ReviewHome;
