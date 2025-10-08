import { useState } from "react";
import {
  ReviewHomeContainer,
  ReviewsBox,
  ScrollContent,
  SubTitleReview,
  TitleReview,
} from "./ReviewHome.style";
import CardReview from "@molecules/CardReview";
import reviews from "@services/review.json";

function ReviewHome() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <ReviewHomeContainer>
      <TitleReview>Lo que opinan nuestros pacientes</TitleReview>
      <SubTitleReview>Comentarios de pacientes</SubTitleReview>

      <ReviewsBox>
        <ScrollContent
          className="scroll-content"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <CardReview name={review.name} description={review.description} />
            </div>
          ))}
        </ScrollContent>
      </ReviewsBox>
    </ReviewHomeContainer>
  );
}

export default ReviewHome;
